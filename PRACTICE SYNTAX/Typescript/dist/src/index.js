"use strict";
function getCustomer(id) {
    return id !== 0 ? { date: new Date() } : null;
}
let customer1 = getCustomer(0);
console.log(customer1 === null || customer1 === void 0 ? void 0 : customer1.date);
//# sourceMappingURL=index.js.map