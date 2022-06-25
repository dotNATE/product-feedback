import { suggestions } from "../../testData";

export default {
    findAll() {
        return suggestions;
    },
    create (args: any) {
        const { title, category, detail, createdBy } = args;
        const id = "e81a725b-e71d-4117-81db-29c62b27bf2f";
        const suggestion = { id, title, category, detail, createdBy };
    
        return suggestion;
    },
};