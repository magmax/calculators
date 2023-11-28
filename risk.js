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
        var root = Element("div").setFather(father).setClass(className + " container");
        var elTitle = Element("div").setFather(root).setText(label).setClass(className + " title");
        var elList = Element("div").setFather(root).setClass(className + " list");

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

var Risk = (name, data) => {
    var root = document.getElementById(name);
    var metaFactorList = Container(name, 0, "", "");

    var init = () => {
        for (i in data) {
            metaFactorList.append(builder(data[i], i, 1));
        };
        metaFactorList.render(root);
    };


    var builder = (data, id, level) => {
        var classNameLevel = name + "_level_" + level;
        var classNameId = name + "_id_" + id;
        var className = name + " " + classNameLevel + " " + classNameId;

        var container = Container(name, level, id, data.l, data.d, data.o != undefined);
        if (data.c != undefined) {
            for (i in data.c) {
                container.append(builder(data.c[i], i, level + 1));
            };
        } else {
            var first = true;
            for (i in data.o) {
                container.append(Option(name, level, data.o[i].l, data.o[i].d, i));
                if (first) {
                    first = false;
                    container.select(i);
                };
            };
        };
        return container;
    };


    var getVector = () => {
    };

    var set = () => {
    };

    init();
    return {
        set: set,
    }
};
// vim: tabstop=4 shiftwidth=4 expandtab
