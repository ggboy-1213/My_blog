#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🚀 检查部署前的配置...\n')

// 检查必要文件
const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'app/layout.tsx',
  'app/globals.css',
  'config.ts'
]

console.log('📁 检查必要文件...')
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`)
  } else {
    console.log(`❌ 缺少文件: ${file}`)
    process.exit(1)
  }
})

// 检查 package.json 中的依赖
console.log('\n📦 检查依赖配置...')
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const dependencies = Object.keys(packageJson.dependencies || {})

// 检查是否有问题的依赖
const problematicDeps = [
  '@types/vanilla-tilt',
  'react-tsparticles',
  'tsparticles',
  'vanilla-tilt',
  'react-intersection-observer',
  'intersection-observer'
]

const foundProblematic = dependencies.filter(dep =>
  problematicDeps.includes(dep)
)

if (foundProblematic.length > 0) {
  console.log('❌ 发现可能有问题的依赖:', foundProblematic)
  console.log('建议移除这些依赖以确保部署成功')
  process.exit(1)
} else {
  console.log('✅ 依赖检查通过')
}

// 检查 Next.js 配置
console.log('\n⚙️ 检查 Next.js 配置...')
try {
  const nextConfig = fs.readFileSync('next.config.js', 'utf8')
  if (nextConfig.includes('node: any')) {
    console.log('❌ Next.js 配置中包含 TypeScript 语法')
    process.exit(1)
  }
  console.log('✅ Next.js 配置正常')
} catch (error) {
  console.log('❌ 无法读取 Next.js 配置:', error.message)
  process.exit(1)
}

// 检查 TypeScript 配置
console.log('\n📘 检查 TypeScript 配置...')
try {
  const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'))
  if (!tsConfig.include || !tsConfig.include.some(pattern => pattern.includes('**/*.ts'))) {
    console.log('⚠️  TypeScript 配置可能不包含所有文件')
  }
  console.log('✅ TypeScript 配置正常')
} catch (error) {
  console.log('❌ TypeScript 配置错误:', error.message)
  process.exit(1)
}

console.log('\n🎉 所有检查通过！可以安全部署。')
console.log('\n📋 部署建议:')
console.log('- 确保 Vercel 环境变量配置正确')
console.log('- 检查 Node.js 版本兼容性 (推荐 18.x 或以上)')
console.log('- 部署后运行 Lighthouse 检查性能分数')