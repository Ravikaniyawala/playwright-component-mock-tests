import { server } from './server';

export default async function globalSetup() {
    server.listen();
}