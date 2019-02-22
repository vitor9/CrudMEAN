import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";

// Se tivermos mais de um tipo, devemos importar para este nosso arquivo
// E incluir no array abaixo...
const typeDefs = [User]

export default mergeTypes(typeDefs, { all: true });