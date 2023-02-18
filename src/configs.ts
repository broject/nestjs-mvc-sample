import { RouterModule } from "@nestjs/core";
import { TestModule } from "test/test.module";
import { AdminModule } from "./modules/admin.module";

const routeInfo = [
    {
        path: '/admin',
        module: AdminModule,
    },
    {
        path: '/test',
        module: TestModule,
        children: []
    },
];

const imported = [];
const register_modules = [];

routeInfo.forEach(function (item) {
    imported.push(item.module);
});
routeInfo.forEach(function (item) {
    var asdf = {
        path: item.path,
        module: item.module,
        children: []
    };
    if (!!item.children && item.children.length > 0) {
        asdf.children = item.children;
    }
    register_modules.push(asdf);
});

imported.push(
    RouterModule.register(register_modules)
);

export default imported;