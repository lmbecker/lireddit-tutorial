import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';

export type MyContext = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
};
