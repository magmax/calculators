var Element = (type, id) => {
    var item = document.createElement(type);
    if (id != undefined) {
        item.setAttribute("id", id);
    };

    var get = () => item;

    var appendChild = (el) => item.appendChild(el);

    var setFather = (el) => {
        el.appendChild(item);
        return me;
    };

    var setClass = (name) => {
        item.className = name;
        return me;
    };

    var setText = (text) => {
        item.innerHTML = text;
        return me;
    };

    var setAttribute = (key, value) => {
        item.setAttribute(key, value);
        return me;
    };

    var setLabel = (text) => {
        var label = document.createElement("label");
        label.setAttribute("for", id);
        label.appendChild(document.createTextNode(text));
        item.appendChild(label);
        return me;
    };

    var setOnchange = (fn) => {
        item.onchange = fn;
        return  me;
    };

    var setClick = (fn) => {
        item.onclick = fn;
        return  me;
    };

    var me = {
        get: get,
        appendChild: appendChild,
        setFather: setFather,
        setClass: setClass,
        setText: setText,
        setAttribute: setAttribute,
        setLabel: setLabel,
        setOnchange: setOnchange,
        setClick: setClick,
    };
    return me;
};

var Container = (name, level, id, label, description, selection) => {
    var children = [];
    var depth = 0;
    var classNameLevel = " level_" + level;
    var classNameId = " id_" + id;
    var className = name + " " + classNameLevel + " " + classNameId;
    var onclickActions = [];
    var selected = null;

    var onclick = function(event) {
        select(event.target.id);
        for (i in onclickActions) {
            onclickActions[i]();
        }
    };

    var select = (selectionId) => {
        for (var i in children) {
            item = children[i];
            if (selectionId == item.getId()) {
                selected = item;
                item.select();
            } else {
                item.unselect();
            };
        };
    };

    var addOnclickAction = (action) => {
        onclickActions.push(action);
    };

    var render = (father) => {
        var effectiveClass = className + " depth_" + depth;
        var root = Element("div").setFather(father).setClass(effectiveClass + " container");
        var elTitle = Element("div").setFather(root).setText(label).setClass(effectiveClass + " title");
        var elList = Element("div").setFather(root).setClass(effectiveClass + " list");

        for (var i in children) {
            var item = children[i].render(elList);
            if (selection) {
                item.setClick(onclick);
            }
        }
        return root;
    }

    return {
        render: render,
        getId: () => id,
        getSelectedId: () => selected.getId(),
        append: (item) => children.push(item),
        select: select,
        addClassName: (newClassName) => className += " " + newClassName,
        getDepth: () => depth,
        setDepth: (n) => depth = Math.max(depth, n),
        addOnclickAction: addOnclickAction,
    };
};

var Option = (name, level, label, value, id) => {
    var classNameLevel = " level_" + level;
    var classNameId = " id_" + id;
    var className = name + " item " + classNameLevel + " " + classNameId;
    var selected = false;

    var root = Element("div", id).setAttribute("value", label).setText(label);
    var update = () => {
        root.setClass(className + (selected ? " selected" : ""));
        return root;
    };

    return {
        render: (father) => update().setFather(father),
        getValue: () => value,
        getId: () => id,
        select: () => {selected = true; update()},
        unselect: () => {selected = false; update()},
        addClassName: (newClassName) => className += " " + newClassName,
    };
};

var Vector = (name) => {
    var root = Element("div").setClass(name + " vector");
    var score = Element("div").setClass(name + " score").setFather(root);
    var chain = Element("div").setClass(name + " chain").setFather(root);
    var value = null;

    var update = (str) => {
        chain.setText(str);
    };

    var setValue = (n) => {
        score.setText(n);
    };

    return {
        render: (father) => root.setFather(father),
        update: update,
        setValue: setValue,
    };
};

var Calculator = (name, data, header, calc) => {
    var root = document.getElementById(name);
    var vector = Vector(name, header);
    var metaFactorList = Container(name, 0, "", "");
    var nodes = []

    var init = () => {
        vector.render(root);
        for (i in data) {
            var child = builder(data[i], i, 1);
            metaFactorList.append(child);
            metaFactorList.setDepth(child.getDepth() + 1);
        };
        metaFactorList.render(root);
    };


    var builder = (data, id, level) => {
        var container = Container(name, level, id, data.l, data.d, data.o != undefined);
        if (data.c != undefined) {
            for (var i in data.c) {
                var child = builder(data.c[i], i, level + 1);
                container.append(child);
                container.setDepth(child.getDepth() + 1);
            };
        } else {
            container.addClassName("selector");
            container.setDepth(1);
            container.addOnclickAction(updateVector);
            nodes.push(container);
            classNames = ["best", "good", "medium", "bad", "worse"]
            var pos = 0;
            for (var i in data.o) {
                var option = Option(name, level, data.o[i].l, data.o[i].d, i);
                option.addClassName(classNames[Math.min(pos, classNames.length - 1)]);
                container.append(option);
                if (pos == 0) {
                    container.select(i);
                }
                pos ++;
            };
            updateVector();
        };
        return container;
    };

    var nodesAsDict = () => {
        result = []
        for (var i in nodes) {
            var node = nodes[i];
            result[node.getId()] = node.getSelectedId();
        };
        return result;
    };

    var updateVector = () => {
        var v = getVector();
        vector.update(v);
        window.location.hash = v;
        if (calc != undefined) {
            var n = calc(nodesAsDict());
            vector.setValue(n);
        }
    };

    var getVector = () => {
        var result = header;
        for (var i in nodes) {
            var node = nodes[i];
            result += "/" + node.getId() + ":" + node.getSelectedId();
        };
        return result;
    };

    var set = () => {
    };

    init();
    return {
        set: set,
    }
};
// vim: tabstop=4 shiftwidth=4 expandtab
