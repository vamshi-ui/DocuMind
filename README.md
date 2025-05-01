# DocuMind

A powerful PDF RAG (Retrieval-Augmented Generation) application that allows users to upload PDF documents and engage in AI-powered conversations about their content.

## Overview

DocuMind leverages advanced AI techniques to enable natural language interactions with PDF documents. Upload your PDFs and immediately start asking questions, extracting insights, and exploring document content through an intuitive chat interface.

## Features

- **PDF Document Upload**: Easily upload and manage multiple PDF documents
- **Natural Language Processing**: Interact with your documents using conversational language
- **Intelligent Retrieval**: Advanced RAG (Retrieval-Augmented Generation) system for accurate information extraction
- **Context-Aware Responses**: AI responses consider the full document context
- **User-Friendly Interface**: Clean, intuitive Angular 18 UI for seamless experience
- **Document Management**: Organize and access your document library
- **Responsive Design**: Works across desktop and mobile devices

## Tech Stack

- **Frontend**: Angular 18
- **State Management**: Angular Signals and RxJS
- **UI Components**: PrimeNG
- **PDF Processing**: PDF.js
- **Vector Database**: (Your choice - e.g., Pinecone, Weaviate, etc.)
- **LLM Integration**: (Your choice - e.g., OpenAI, Anthropic, etc.)

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vamshi-ui/DocuMind.git
   cd documind
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your API keys and configuration.

4. Start the development server:

   ```bash
   ng serve
   ```

5. Navigate to `http://localhost:4200/` in your browser.

## Development server

Run `npx ng s` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Structure

```
documind/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── document-uploader/
│   │   │   ├── chat-interface/
│   │   │   ├── document-library/
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── pdf.service.ts
│   │   │   ├── rag.service.ts
│   │   │   ├── ai.service.ts
│   │   │   └── ...
│   │   ├── models/
│   │   ├── signals/
│   │   │   ├── document.signals.ts
│   │   │   ├── chat.signals.ts
│   │   │   └── ...
│   │   └── ...
│   ├── assets/
│   └── environments/
├── angular.json
├── package.json
└── ...
```

## Usage

1. **Upload Documents**: Click the upload button to add PDF files
2. **Select Document**: Choose a document from your library to interact with
3. **Ask Questions**: Use the chat interface to ask questions about the document
4. **Review Responses**: Get AI-generated answers with highlighted source references

## Key Implementation Details

### Angular Signals for State Management

DocuMind uses Angular's Signals API for reactive state management:

```typescript
// Example of document state management with signals
export class DocumentSignals {
  private _documents = signal<Document[]>([]);
  public documents = computed(() => this._documents());

  addDocument(document: Document) {
    this._documents.update((docs) => [...docs, document]);
  }

  // Other document operations...
}
```

### PrimeNG UI Components

The application leverages PrimeNG's rich component library:

- p-fileUpload for document uploading
- p-dialog for modals and notifications
- p-chat for the conversation interface
- p-card for document previews
- p-table for document listings

### RxJS for Reactive Programming

RxJS is used for handling asynchronous operations and event streams:

```typescript
// Example of RxJS usage
processDocument(file: File): Observable<ProcessedDocument> {
  return this.pdfService.extractText(file).pipe(
    switchMap(text => this.vectorizeContent(text)),
    map(vectors => ({ text, vectors, metadata: { filename: file.name } })),
    catchError(error => {
      this.notificationService.showError('Failed to process document');
      return throwError(() => error);
    })
  );
}
```

## Future Enhancements

- Multi-document queries
- Document summarization
- Highlighting and annotation tools
- Collaboration features
- Export functionality
- Advanced document analytics
- Custom training for domain-specific knowledge

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular team for the powerful framework
- PrimeNG team for the comprehensive UI component library
- (Add other relevant libraries)

---

Developed with ❤️ by [Vamshi Bandela, Soumya Bhandarkar, Aman, Rohit]
