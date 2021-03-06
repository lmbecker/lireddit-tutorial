import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';

// @ObjectType, @Field is for graphql
// @Entity, @PrimaryKey, @Property is for mikro-orm

@ObjectType()
@Entity()
export class Post {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field()
    @Property()
    createdAt: Date = new Date();

    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    @Field()
    @Property({ type: 'text' })
    title!: string;
}
