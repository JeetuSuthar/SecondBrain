"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const Home_1 = __importDefault(require("./components/ui/Home"));
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    return (<div>
      <Home_1.default />
    </div>);
}
exports.default = App;
