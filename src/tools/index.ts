import createTemplateTool from "./createTemplateTool.js";
import getDetailTemplateTool from "./getDetailTemplateTool.js";
import getListLayersOfTemplateTool from "./getListLayersOfTemplateTool.js";
import getListTemplatesTool from "./getListTemplatesTool.js";
import getDetailProductTool from "./shopify/products/getDetailProductTool.js";
import { getListProductsTool } from "./shopify/products/index.js";
import getUserPreferencesTool from "./getUserPreferencesTool.js";

const TOOLS = [
  getListTemplatesTool,
  getDetailTemplateTool,
  createTemplateTool,
  getListLayersOfTemplateTool,
  getListProductsTool,
  getDetailProductTool,
  getUserPreferencesTool,
];

export { TOOLS };
