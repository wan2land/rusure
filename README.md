# R U Sure?

<p>
  <a href="https://github.com/wan2land/rusure/actions?query=workflow%3A%22Node.js+CI%22"><img alt="Build" src="https://img.shields.io/github/workflow/status/wan2land/rusure/Node.js%20CI?logo=github&style=flat-square" /></a>
  <a href="https://npmcharts.com/compare/rusure?minimal=true"><img alt="Downloads" src="https://img.shields.io/npm/dt/rusure.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/rusure"><img alt="Version" src="https://img.shields.io/npm/v/rusure.svg?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/rusure"><img alt="License" src="https://img.shields.io/npm/l/rusure.svg?style=flat-square" /></a>
  <br />
  <a href="https://david-dm.org/wan2land/rusure"><img alt="dependencies Status" src="https://img.shields.io/david/wan2land/rusure.svg?style=flat-square" /></a>
  <a href="https://david-dm.org/wan2land/rusure?type=dev"><img alt="devDependencies Status" src="https://img.shields.io/david/dev/wan2land/rusure.svg?style=flat-square" /></a>
</p>

Print "Are you sure?" before critical commands.

## Installation

```bash
npm install rusure --save --dev
```

## Usage

Basic usage

```bash
npx rusure

# print "Are you sure? (y/N)"
```

Custom message

```bash
npx rusure "continue? (y/N)"

# print "continue? (y/N)"
```

Set env RUSURE_SKIP=1, then skip. You can use in CI Server.

```bash 
RUSURE_SKIP=1 npx rusure
```

## Example


`package.json`

```json
{
  "scripts": {
    "deploy:dev": "sls deploy --stage dev",
    "deploy:prod": "rusure && sls deploy --stage prod"
  }
}
```
