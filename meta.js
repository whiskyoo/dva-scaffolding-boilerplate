module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A project base on dva-react-router-3"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "mock": {
      "type": "confirm",
      "message": "Use mock server ?"
    },
    "axios": {
      "type": "confirm",
      "message": "Use axios to request ?"
    }
  },
  "filters": {
    "build/mock-middleware.js": "mock",
    "mock/**": "mock",
    "src/utils/api.js": "axios"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/whiskyoo/dva-scaffolding"
};