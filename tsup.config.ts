import { defineConfig } from "tsup"

export const tsup = defineConfig({
	entry: ["src/index.tsx"],
	clean: true,
	format: ["cjs", 'esm'],
	dts: true,
	loader: {
		".tsx": "tsx"
	}
})