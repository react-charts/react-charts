import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import size from 'rollup-plugin-size';

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    }
    // {
    //   file: pkg.module,
    //   format: "es",
    //   sourcemap: true
    // }
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    size({
      publish: true,
      exclude: pkg.module,
      filename: 'sizes-cjs.json',
      writeFile: process.env.CI ? true : false,
    })
  ]
};
