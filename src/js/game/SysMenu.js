cc.dumpConfig();

var SysMenu = cc.Layer.extend({
    _ship:null,

    init:function () {
        var bRet = false;
        if (this._super()) {

            var logo = cc.Sprite.create(s_loading,cc.rect(0, 0, 320, 480));
            logo.setAnchorPoint(cc.p(0, 0))
            logo.setPosition(0, 0);
            this.addChild(logo, 0, 0)
            bRet = true;
        }
        return bRet;
    }
});

SysMenu.create = function () {
    var sg = new SysMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SysMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = SysMenu.create();
    scene.addChild(layer);
    return scene;
};
