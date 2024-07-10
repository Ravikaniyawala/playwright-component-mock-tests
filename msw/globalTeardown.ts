import { server } from './server';

export default async function globalTeardown() {
    server.close();
}