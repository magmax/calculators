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

    var onclick = function(event) {
        select(event.target.id);
    };

    var select = (id) => {
        for (i in children) {
            var item = children[i];
            if (id == item.getId()) {
                item.select();
            } else {
                item.unselect();
            };
        };
    };

    var render = (father) => {
        var effectiveClass = className + " depth_" + depth;
        var root = Element("div").setFather(father).setClass(effectiveClass + " container");
        var elTitle = Element("div").setFather(root).setText(label).setClass(effectiveClass + " title");
        var elList = Element("div").setFather(root).setClass(effectiveClass + " list");

        for (id in children) {
            var item = children[id].render(elList);
            if (selection) {
                item.setClick(onclick);
            }
        }
        return root;
    }

    return {
        render: render,
        append: (item) => children.push(item),
        select: select,
        addClassName: (newClassName) => className += " " + newClassName,
        getDepth: () => depth,
        setDepth: (n) => depth = Math.max(depth, n),
    };
};

var Option = (name, level, label, value, id) => {
    var classNameLevel = " level_" + level;
    var classNameId = " id_" + id;
    var className = name + " item " + classNameLevel + " " + classNameId;

    var root = Element("div", id).setAttribute("value", label).setText(label).setClass(className);

    return {
        render: (father) => root.setFather(father),
        getValue: () => value,
        getId: () => id,
        select: () => root.setClass(className + " selected"),
        unselect: () => root.setClass(className),
    };
};

var Calculator = (name, data) => {
    var root = document.getElementById(name);
    var metaFactorList = Container(name, 0, "", "");
    var nodes = []

    var init = () => {
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
            for (i in data.c) {
                var child = builder(data.c[i], i, level + 1);
                container.append(child);
                container.setDepth(child.getDepth() + 1);
            };
        } else {
            container.addClassName("selector");
            container.setDepth(1);
            var first = true;
            for (i in data.o) {
                var option = Option(name, level, data.o[i].l, data.o[i].d, i);
                nodes.push(option);
                container.append(option);
                if (first) {
                    first = false;
                    container.select(i);
                };
            };
        };
        return container;
    };


    var getVector = () => {
        for (node in nodes) {
            console.log(node);
        };
    };

    var set = () => {
    };

    init();
    return {
        set: set,
    }
};
// vim: tabstop=4 shiftwidth=4 expandtab
