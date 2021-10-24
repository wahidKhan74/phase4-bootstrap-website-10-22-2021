var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank(name, address) {
        this.name = name;
        this.address = address;
    }
    return Bank;
}());
var BOA = /** @class */ (function (_super) {
    __extends(BOA, _super);
    function BOA(name, address, assets, accounts) {
        var _this = _super.call(this, name, address) || this;
        _this.assets = assets;
        _this.accounts = accounts;
        return _this;
    }
    BOA.prototype.showDetails = function () {
        return "The BOA : " + this.name + " & assets : " + this.assets + " & total accounts " + this.accounts;
    };
    return BOA;
}(Bank));
var BOI = /** @class */ (function (_super) {
    __extends(BOI, _super);
    function BOI(name, address, assets, accounts) {
        var _this = _super.call(this, name, address) || this;
        _this.assets = assets;
        _this.accounts = accounts;
        return _this;
    }
    BOI.prototype.showDetails = function () {
        return "The BOI : " + this.name + " & assets : " + this.assets + " & total accounts " + this.accounts;
    };
    return BOI;
}(Bank));
var boa = new BOA("Bank Of America", "America(US)", 89545464, 53445654);
console.log(boa.showDetails());
console.log("------------------");
var boi = new BOI("Bank Of India", "India(IN)", 4354565467, 423459087);
console.log(boi.showDetails());
