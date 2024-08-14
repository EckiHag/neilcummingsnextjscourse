// envConfig.ts
import { loadEnvConfig } from "@next/env"

const projectDir = process.cwd()
loadEnvConfig(projectDir)
console.log("envConfig.ts loaded")
