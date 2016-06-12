function UnitManager() {
  this.units = [];
}

UnitManager.prototype.add = function(unit) {
  this.units.push(unit);
};
