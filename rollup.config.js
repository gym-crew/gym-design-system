import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

const extensions = ["js", "jsx", "ts", "tsx"];
const external = ["react", "react-dom", "styled-components"];

function setUpRollup({ input, output }) {
  return {
    input,
    output: {
      ...output,
      exports: "named",
    },
    watch: {
      include: "*",
      exclude: "node_modules/**",
    },
    plugins: [
      peerDepsExternal(),
      json(),
      resolve({ extensions }),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      image(),
      terser(),
    ],
    external,
  };
}

export default [
  setUpRollup({
    input: "src/index.ts",
    output: {
      file: "dist/cjs.js",
      sourcemap: true,
      format: "cjs",
    },
  }),
  setUpRollup({
    input: "src/index.ts",
    output: {
      file: "dist/esm.js",
      sourcemap: true,
      format: "esm",
    },
  }),
];
