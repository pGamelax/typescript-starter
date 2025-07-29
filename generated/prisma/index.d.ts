
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Last_positions
 * 
 */
export type Last_positions = $Result.DefaultSelection<Prisma.$Last_positionsPayload>
/**
 * Model Tickets
 * 
 */
export type Tickets = $Result.DefaultSelection<Prisma.$TicketsPayload>
/**
 * Model PlayerPush
 * 
 */
export type PlayerPush = $Result.DefaultSelection<Prisma.$PlayerPushPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModeTickets: {
  PUSH: 'PUSH',
  WAR: 'WAR'
};

export type ModeTickets = (typeof ModeTickets)[keyof typeof ModeTickets]

}

export type ModeTickets = $Enums.ModeTickets

export const ModeTickets: typeof $Enums.ModeTickets

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.last_positions`: Exposes CRUD operations for the **Last_positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Last_positions
    * const last_positions = await prisma.last_positions.findMany()
    * ```
    */
  get last_positions(): Prisma.Last_positionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **Tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.TicketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerPush`: Exposes CRUD operations for the **PlayerPush** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerPushes
    * const playerPushes = await prisma.playerPush.findMany()
    * ```
    */
  get playerPush(): Prisma.PlayerPushDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Last_positions: 'Last_positions',
    Tickets: 'Tickets',
    PlayerPush: 'PlayerPush'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "last_positions" | "tickets" | "playerPush"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Last_positions: {
        payload: Prisma.$Last_positionsPayload<ExtArgs>
        fields: Prisma.Last_positionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Last_positionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Last_positionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>
          }
          findFirst: {
            args: Prisma.Last_positionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Last_positionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>
          }
          findMany: {
            args: Prisma.Last_positionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>[]
          }
          create: {
            args: Prisma.Last_positionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>
          }
          createMany: {
            args: Prisma.Last_positionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Last_positionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>
          }
          update: {
            args: Prisma.Last_positionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>
          }
          deleteMany: {
            args: Prisma.Last_positionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Last_positionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Last_positionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Last_positionsPayload>
          }
          aggregate: {
            args: Prisma.Last_positionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLast_positions>
          }
          groupBy: {
            args: Prisma.Last_positionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Last_positionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Last_positionsCountArgs<ExtArgs>
            result: $Utils.Optional<Last_positionsCountAggregateOutputType> | number
          }
        }
      }
      Tickets: {
        payload: Prisma.$TicketsPayload<ExtArgs>
        fields: Prisma.TicketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findFirst: {
            args: Prisma.TicketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findMany: {
            args: Prisma.TicketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          create: {
            args: Prisma.TicketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          createMany: {
            args: Prisma.TicketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          update: {
            args: Prisma.TicketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          deleteMany: {
            args: Prisma.TicketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.TicketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      PlayerPush: {
        payload: Prisma.$PlayerPushPayload<ExtArgs>
        fields: Prisma.PlayerPushFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerPushFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerPushFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>
          }
          findFirst: {
            args: Prisma.PlayerPushFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerPushFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>
          }
          findMany: {
            args: Prisma.PlayerPushFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>[]
          }
          create: {
            args: Prisma.PlayerPushCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>
          }
          createMany: {
            args: Prisma.PlayerPushCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayerPushDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>
          }
          update: {
            args: Prisma.PlayerPushUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>
          }
          deleteMany: {
            args: Prisma.PlayerPushDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerPushUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayerPushUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPushPayload>
          }
          aggregate: {
            args: Prisma.PlayerPushAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerPush>
          }
          groupBy: {
            args: Prisma.PlayerPushGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerPushGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerPushCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerPushCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    last_positions?: Last_positionsOmit
    tickets?: TicketsOmit
    playerPush?: PlayerPushOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Last_positions: number
    PlayerPush: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Last_positions?: boolean | UserCountOutputTypeCountLast_positionsArgs
    PlayerPush?: boolean | UserCountOutputTypeCountPlayerPushArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLast_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Last_positionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayerPushArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPushWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    trophies: number | null
    best_position: number | null
    earnigns: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    trophies: number | null
    best_position: number | null
    earnigns: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    phone: string | null
    password: string | null
    tag: string | null
    trophies: number | null
    best_position: number | null
    earnigns: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    phone: string | null
    password: string | null
    tag: string | null
    trophies: number | null
    best_position: number | null
    earnigns: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    phone: number
    password: number
    tag: number
    trophies: number
    best_position: number
    earnigns: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    trophies?: true
    best_position?: true
    earnigns?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    trophies?: true
    best_position?: true
    earnigns?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    phone?: true
    password?: true
    tag?: true
    trophies?: true
    best_position?: true
    earnigns?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    phone?: true
    password?: true
    tag?: true
    trophies?: true
    best_position?: true
    earnigns?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    phone?: true
    password?: true
    tag?: true
    trophies?: true
    best_position?: true
    earnigns?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies: number
    best_position: number | null
    earnigns: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    phone?: boolean
    password?: boolean
    tag?: boolean
    trophies?: boolean
    best_position?: boolean
    earnigns?: boolean
    Last_positions?: boolean | User$Last_positionsArgs<ExtArgs>
    PlayerPush?: boolean | User$PlayerPushArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    phone?: boolean
    password?: boolean
    tag?: boolean
    trophies?: boolean
    best_position?: boolean
    earnigns?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "phone" | "password" | "tag" | "trophies" | "best_position" | "earnigns", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Last_positions?: boolean | User$Last_positionsArgs<ExtArgs>
    PlayerPush?: boolean | User$PlayerPushArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Last_positions: Prisma.$Last_positionsPayload<ExtArgs>[]
      PlayerPush: Prisma.$PlayerPushPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      phone: string
      password: string
      tag: string
      trophies: number
      best_position: number | null
      earnigns: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Last_positions<T extends User$Last_positionsArgs<ExtArgs> = {}>(args?: Subset<T, User$Last_positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PlayerPush<T extends User$PlayerPushArgs<ExtArgs> = {}>(args?: Subset<T, User$PlayerPushArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly tag: FieldRef<"User", 'String'>
    readonly trophies: FieldRef<"User", 'Int'>
    readonly best_position: FieldRef<"User", 'Int'>
    readonly earnigns: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Last_positions
   */
  export type User$Last_positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    where?: Last_positionsWhereInput
    orderBy?: Last_positionsOrderByWithRelationInput | Last_positionsOrderByWithRelationInput[]
    cursor?: Last_positionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Last_positionsScalarFieldEnum | Last_positionsScalarFieldEnum[]
  }

  /**
   * User.PlayerPush
   */
  export type User$PlayerPushArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    where?: PlayerPushWhereInput
    orderBy?: PlayerPushOrderByWithRelationInput | PlayerPushOrderByWithRelationInput[]
    cursor?: PlayerPushWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerPushScalarFieldEnum | PlayerPushScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Last_positions
   */

  export type AggregateLast_positions = {
    _count: Last_positionsCountAggregateOutputType | null
    _avg: Last_positionsAvgAggregateOutputType | null
    _sum: Last_positionsSumAggregateOutputType | null
    _min: Last_positionsMinAggregateOutputType | null
    _max: Last_positionsMaxAggregateOutputType | null
  }

  export type Last_positionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    position: number | null
    trophies: number | null
  }

  export type Last_positionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    position: number | null
    trophies: number | null
  }

  export type Last_positionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    position: number | null
    trophies: number | null
  }

  export type Last_positionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    position: number | null
    trophies: number | null
  }

  export type Last_positionsCountAggregateOutputType = {
    id: number
    user_id: number
    position: number
    trophies: number
    _all: number
  }


  export type Last_positionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    position?: true
    trophies?: true
  }

  export type Last_positionsSumAggregateInputType = {
    id?: true
    user_id?: true
    position?: true
    trophies?: true
  }

  export type Last_positionsMinAggregateInputType = {
    id?: true
    user_id?: true
    position?: true
    trophies?: true
  }

  export type Last_positionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    position?: true
    trophies?: true
  }

  export type Last_positionsCountAggregateInputType = {
    id?: true
    user_id?: true
    position?: true
    trophies?: true
    _all?: true
  }

  export type Last_positionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Last_positions to aggregate.
     */
    where?: Last_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Last_positions to fetch.
     */
    orderBy?: Last_positionsOrderByWithRelationInput | Last_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Last_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Last_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Last_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Last_positions
    **/
    _count?: true | Last_positionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Last_positionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Last_positionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Last_positionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Last_positionsMaxAggregateInputType
  }

  export type GetLast_positionsAggregateType<T extends Last_positionsAggregateArgs> = {
        [P in keyof T & keyof AggregateLast_positions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLast_positions[P]>
      : GetScalarType<T[P], AggregateLast_positions[P]>
  }




  export type Last_positionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Last_positionsWhereInput
    orderBy?: Last_positionsOrderByWithAggregationInput | Last_positionsOrderByWithAggregationInput[]
    by: Last_positionsScalarFieldEnum[] | Last_positionsScalarFieldEnum
    having?: Last_positionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Last_positionsCountAggregateInputType | true
    _avg?: Last_positionsAvgAggregateInputType
    _sum?: Last_positionsSumAggregateInputType
    _min?: Last_positionsMinAggregateInputType
    _max?: Last_positionsMaxAggregateInputType
  }

  export type Last_positionsGroupByOutputType = {
    id: number
    user_id: number
    position: number
    trophies: number
    _count: Last_positionsCountAggregateOutputType | null
    _avg: Last_positionsAvgAggregateOutputType | null
    _sum: Last_positionsSumAggregateOutputType | null
    _min: Last_positionsMinAggregateOutputType | null
    _max: Last_positionsMaxAggregateOutputType | null
  }

  type GetLast_positionsGroupByPayload<T extends Last_positionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Last_positionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Last_positionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Last_positionsGroupByOutputType[P]>
            : GetScalarType<T[P], Last_positionsGroupByOutputType[P]>
        }
      >
    >


  export type Last_positionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    position?: boolean
    trophies?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["last_positions"]>



  export type Last_positionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    position?: boolean
    trophies?: boolean
  }

  export type Last_positionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "position" | "trophies", ExtArgs["result"]["last_positions"]>
  export type Last_positionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Last_positionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Last_positions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      position: number
      trophies: number
    }, ExtArgs["result"]["last_positions"]>
    composites: {}
  }

  type Last_positionsGetPayload<S extends boolean | null | undefined | Last_positionsDefaultArgs> = $Result.GetResult<Prisma.$Last_positionsPayload, S>

  type Last_positionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Last_positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Last_positionsCountAggregateInputType | true
    }

  export interface Last_positionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Last_positions'], meta: { name: 'Last_positions' } }
    /**
     * Find zero or one Last_positions that matches the filter.
     * @param {Last_positionsFindUniqueArgs} args - Arguments to find a Last_positions
     * @example
     * // Get one Last_positions
     * const last_positions = await prisma.last_positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Last_positionsFindUniqueArgs>(args: SelectSubset<T, Last_positionsFindUniqueArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Last_positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Last_positionsFindUniqueOrThrowArgs} args - Arguments to find a Last_positions
     * @example
     * // Get one Last_positions
     * const last_positions = await prisma.last_positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Last_positionsFindUniqueOrThrowArgs>(args: SelectSubset<T, Last_positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Last_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsFindFirstArgs} args - Arguments to find a Last_positions
     * @example
     * // Get one Last_positions
     * const last_positions = await prisma.last_positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Last_positionsFindFirstArgs>(args?: SelectSubset<T, Last_positionsFindFirstArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Last_positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsFindFirstOrThrowArgs} args - Arguments to find a Last_positions
     * @example
     * // Get one Last_positions
     * const last_positions = await prisma.last_positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Last_positionsFindFirstOrThrowArgs>(args?: SelectSubset<T, Last_positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Last_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Last_positions
     * const last_positions = await prisma.last_positions.findMany()
     * 
     * // Get first 10 Last_positions
     * const last_positions = await prisma.last_positions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const last_positionsWithIdOnly = await prisma.last_positions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Last_positionsFindManyArgs>(args?: SelectSubset<T, Last_positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Last_positions.
     * @param {Last_positionsCreateArgs} args - Arguments to create a Last_positions.
     * @example
     * // Create one Last_positions
     * const Last_positions = await prisma.last_positions.create({
     *   data: {
     *     // ... data to create a Last_positions
     *   }
     * })
     * 
     */
    create<T extends Last_positionsCreateArgs>(args: SelectSubset<T, Last_positionsCreateArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Last_positions.
     * @param {Last_positionsCreateManyArgs} args - Arguments to create many Last_positions.
     * @example
     * // Create many Last_positions
     * const last_positions = await prisma.last_positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Last_positionsCreateManyArgs>(args?: SelectSubset<T, Last_positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Last_positions.
     * @param {Last_positionsDeleteArgs} args - Arguments to delete one Last_positions.
     * @example
     * // Delete one Last_positions
     * const Last_positions = await prisma.last_positions.delete({
     *   where: {
     *     // ... filter to delete one Last_positions
     *   }
     * })
     * 
     */
    delete<T extends Last_positionsDeleteArgs>(args: SelectSubset<T, Last_positionsDeleteArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Last_positions.
     * @param {Last_positionsUpdateArgs} args - Arguments to update one Last_positions.
     * @example
     * // Update one Last_positions
     * const last_positions = await prisma.last_positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Last_positionsUpdateArgs>(args: SelectSubset<T, Last_positionsUpdateArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Last_positions.
     * @param {Last_positionsDeleteManyArgs} args - Arguments to filter Last_positions to delete.
     * @example
     * // Delete a few Last_positions
     * const { count } = await prisma.last_positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Last_positionsDeleteManyArgs>(args?: SelectSubset<T, Last_positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Last_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Last_positions
     * const last_positions = await prisma.last_positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Last_positionsUpdateManyArgs>(args: SelectSubset<T, Last_positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Last_positions.
     * @param {Last_positionsUpsertArgs} args - Arguments to update or create a Last_positions.
     * @example
     * // Update or create a Last_positions
     * const last_positions = await prisma.last_positions.upsert({
     *   create: {
     *     // ... data to create a Last_positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Last_positions we want to update
     *   }
     * })
     */
    upsert<T extends Last_positionsUpsertArgs>(args: SelectSubset<T, Last_positionsUpsertArgs<ExtArgs>>): Prisma__Last_positionsClient<$Result.GetResult<Prisma.$Last_positionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Last_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsCountArgs} args - Arguments to filter Last_positions to count.
     * @example
     * // Count the number of Last_positions
     * const count = await prisma.last_positions.count({
     *   where: {
     *     // ... the filter for the Last_positions we want to count
     *   }
     * })
    **/
    count<T extends Last_positionsCountArgs>(
      args?: Subset<T, Last_positionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Last_positionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Last_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Last_positionsAggregateArgs>(args: Subset<T, Last_positionsAggregateArgs>): Prisma.PrismaPromise<GetLast_positionsAggregateType<T>>

    /**
     * Group by Last_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Last_positionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Last_positionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Last_positionsGroupByArgs['orderBy'] }
        : { orderBy?: Last_positionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Last_positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLast_positionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Last_positions model
   */
  readonly fields: Last_positionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Last_positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Last_positionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Last_positions model
   */
  interface Last_positionsFieldRefs {
    readonly id: FieldRef<"Last_positions", 'Int'>
    readonly user_id: FieldRef<"Last_positions", 'Int'>
    readonly position: FieldRef<"Last_positions", 'Int'>
    readonly trophies: FieldRef<"Last_positions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Last_positions findUnique
   */
  export type Last_positionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * Filter, which Last_positions to fetch.
     */
    where: Last_positionsWhereUniqueInput
  }

  /**
   * Last_positions findUniqueOrThrow
   */
  export type Last_positionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * Filter, which Last_positions to fetch.
     */
    where: Last_positionsWhereUniqueInput
  }

  /**
   * Last_positions findFirst
   */
  export type Last_positionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * Filter, which Last_positions to fetch.
     */
    where?: Last_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Last_positions to fetch.
     */
    orderBy?: Last_positionsOrderByWithRelationInput | Last_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Last_positions.
     */
    cursor?: Last_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Last_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Last_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Last_positions.
     */
    distinct?: Last_positionsScalarFieldEnum | Last_positionsScalarFieldEnum[]
  }

  /**
   * Last_positions findFirstOrThrow
   */
  export type Last_positionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * Filter, which Last_positions to fetch.
     */
    where?: Last_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Last_positions to fetch.
     */
    orderBy?: Last_positionsOrderByWithRelationInput | Last_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Last_positions.
     */
    cursor?: Last_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Last_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Last_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Last_positions.
     */
    distinct?: Last_positionsScalarFieldEnum | Last_positionsScalarFieldEnum[]
  }

  /**
   * Last_positions findMany
   */
  export type Last_positionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * Filter, which Last_positions to fetch.
     */
    where?: Last_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Last_positions to fetch.
     */
    orderBy?: Last_positionsOrderByWithRelationInput | Last_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Last_positions.
     */
    cursor?: Last_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Last_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Last_positions.
     */
    skip?: number
    distinct?: Last_positionsScalarFieldEnum | Last_positionsScalarFieldEnum[]
  }

  /**
   * Last_positions create
   */
  export type Last_positionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Last_positions.
     */
    data: XOR<Last_positionsCreateInput, Last_positionsUncheckedCreateInput>
  }

  /**
   * Last_positions createMany
   */
  export type Last_positionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Last_positions.
     */
    data: Last_positionsCreateManyInput | Last_positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Last_positions update
   */
  export type Last_positionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Last_positions.
     */
    data: XOR<Last_positionsUpdateInput, Last_positionsUncheckedUpdateInput>
    /**
     * Choose, which Last_positions to update.
     */
    where: Last_positionsWhereUniqueInput
  }

  /**
   * Last_positions updateMany
   */
  export type Last_positionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Last_positions.
     */
    data: XOR<Last_positionsUpdateManyMutationInput, Last_positionsUncheckedUpdateManyInput>
    /**
     * Filter which Last_positions to update
     */
    where?: Last_positionsWhereInput
    /**
     * Limit how many Last_positions to update.
     */
    limit?: number
  }

  /**
   * Last_positions upsert
   */
  export type Last_positionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Last_positions to update in case it exists.
     */
    where: Last_positionsWhereUniqueInput
    /**
     * In case the Last_positions found by the `where` argument doesn't exist, create a new Last_positions with this data.
     */
    create: XOR<Last_positionsCreateInput, Last_positionsUncheckedCreateInput>
    /**
     * In case the Last_positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Last_positionsUpdateInput, Last_positionsUncheckedUpdateInput>
  }

  /**
   * Last_positions delete
   */
  export type Last_positionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
    /**
     * Filter which Last_positions to delete.
     */
    where: Last_positionsWhereUniqueInput
  }

  /**
   * Last_positions deleteMany
   */
  export type Last_positionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Last_positions to delete
     */
    where?: Last_positionsWhereInput
    /**
     * Limit how many Last_positions to delete.
     */
    limit?: number
  }

  /**
   * Last_positions without action
   */
  export type Last_positionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Last_positions
     */
    select?: Last_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Last_positions
     */
    omit?: Last_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Last_positionsInclude<ExtArgs> | null
  }


  /**
   * Model Tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type TicketsSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type TicketsMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    value: number | null
    mode: $Enums.ModeTickets | null
    season: string | null
  }

  export type TicketsMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    value: number | null
    mode: $Enums.ModeTickets | null
    season: string | null
  }

  export type TicketsCountAggregateOutputType = {
    id: number
    uuid: number
    value: number
    mode: number
    season: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type TicketsSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type TicketsMinAggregateInputType = {
    id?: true
    uuid?: true
    value?: true
    mode?: true
    season?: true
  }

  export type TicketsMaxAggregateInputType = {
    id?: true
    uuid?: true
    value?: true
    mode?: true
    season?: true
  }

  export type TicketsCountAggregateInputType = {
    id?: true
    uuid?: true
    value?: true
    mode?: true
    season?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to aggregate.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type TicketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithAggregationInput | TicketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: TicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    id: number
    uuid: string
    value: number
    mode: $Enums.ModeTickets
    season: string
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends TicketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type TicketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    value?: boolean
    mode?: boolean
    season?: boolean
  }, ExtArgs["result"]["tickets"]>



  export type TicketsSelectScalar = {
    id?: boolean
    uuid?: boolean
    value?: boolean
    mode?: boolean
    season?: boolean
  }

  export type TicketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "value" | "mode" | "season", ExtArgs["result"]["tickets"]>

  export type $TicketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tickets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      value: number
      mode: $Enums.ModeTickets
      season: string
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type TicketsGetPayload<S extends boolean | null | undefined | TicketsDefaultArgs> = $Result.GetResult<Prisma.$TicketsPayload, S>

  type TicketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface TicketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tickets'], meta: { name: 'Tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {TicketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketsFindUniqueArgs>(args: SelectSubset<T, TicketsFindUniqueArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketsFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketsFindFirstArgs>(args?: SelectSubset<T, TicketsFindFirstArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketsFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketsWithIdOnly = await prisma.tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketsFindManyArgs>(args?: SelectSubset<T, TicketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {TicketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends TicketsCreateArgs>(args: SelectSubset<T, TicketsCreateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketsCreateManyArgs>(args?: SelectSubset<T, TicketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tickets.
     * @param {TicketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends TicketsDeleteArgs>(args: SelectSubset<T, TicketsDeleteArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {TicketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketsUpdateArgs>(args: SelectSubset<T, TicketsUpdateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketsDeleteManyArgs>(args?: SelectSubset<T, TicketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketsUpdateManyArgs>(args: SelectSubset<T, TicketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tickets.
     * @param {TicketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends TicketsUpsertArgs>(args: SelectSubset<T, TicketsUpsertArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketsCountArgs>(
      args?: Subset<T, TicketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketsGroupByArgs['orderBy'] }
        : { orderBy?: TicketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tickets model
   */
  readonly fields: TicketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tickets model
   */
  interface TicketsFieldRefs {
    readonly id: FieldRef<"Tickets", 'Int'>
    readonly uuid: FieldRef<"Tickets", 'String'>
    readonly value: FieldRef<"Tickets", 'Float'>
    readonly mode: FieldRef<"Tickets", 'ModeTickets'>
    readonly season: FieldRef<"Tickets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tickets findUnique
   */
  export type TicketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findUniqueOrThrow
   */
  export type TicketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findFirst
   */
  export type TicketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findFirstOrThrow
   */
  export type TicketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findMany
   */
  export type TicketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets create
   */
  export type TicketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data needed to create a Tickets.
     */
    data: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
  }

  /**
   * Tickets createMany
   */
  export type TicketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickets update
   */
  export type TicketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data needed to update a Tickets.
     */
    data: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
    /**
     * Choose, which Tickets to update.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets updateMany
   */
  export type TicketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Tickets upsert
   */
  export type TicketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The filter to search for the Tickets to update in case it exists.
     */
    where: TicketsWhereUniqueInput
    /**
     * In case the Tickets found by the `where` argument doesn't exist, create a new Tickets with this data.
     */
    create: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
    /**
     * In case the Tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
  }

  /**
   * Tickets delete
   */
  export type TicketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Filter which Tickets to delete.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets deleteMany
   */
  export type TicketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Tickets without action
   */
  export type TicketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
  }


  /**
   * Model PlayerPush
   */

  export type AggregatePlayerPush = {
    _count: PlayerPushCountAggregateOutputType | null
    _avg: PlayerPushAvgAggregateOutputType | null
    _sum: PlayerPushSumAggregateOutputType | null
    _min: PlayerPushMinAggregateOutputType | null
    _max: PlayerPushMaxAggregateOutputType | null
  }

  export type PlayerPushAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PlayerPushSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PlayerPushMinAggregateOutputType = {
    id: number | null
    season: string | null
    user_id: number | null
  }

  export type PlayerPushMaxAggregateOutputType = {
    id: number | null
    season: string | null
    user_id: number | null
  }

  export type PlayerPushCountAggregateOutputType = {
    id: number
    season: number
    user_id: number
    _all: number
  }


  export type PlayerPushAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PlayerPushSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PlayerPushMinAggregateInputType = {
    id?: true
    season?: true
    user_id?: true
  }

  export type PlayerPushMaxAggregateInputType = {
    id?: true
    season?: true
    user_id?: true
  }

  export type PlayerPushCountAggregateInputType = {
    id?: true
    season?: true
    user_id?: true
    _all?: true
  }

  export type PlayerPushAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPush to aggregate.
     */
    where?: PlayerPushWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPushes to fetch.
     */
    orderBy?: PlayerPushOrderByWithRelationInput | PlayerPushOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerPushWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPushes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPushes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerPushes
    **/
    _count?: true | PlayerPushCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerPushAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerPushSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerPushMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerPushMaxAggregateInputType
  }

  export type GetPlayerPushAggregateType<T extends PlayerPushAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerPush]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerPush[P]>
      : GetScalarType<T[P], AggregatePlayerPush[P]>
  }




  export type PlayerPushGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPushWhereInput
    orderBy?: PlayerPushOrderByWithAggregationInput | PlayerPushOrderByWithAggregationInput[]
    by: PlayerPushScalarFieldEnum[] | PlayerPushScalarFieldEnum
    having?: PlayerPushScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerPushCountAggregateInputType | true
    _avg?: PlayerPushAvgAggregateInputType
    _sum?: PlayerPushSumAggregateInputType
    _min?: PlayerPushMinAggregateInputType
    _max?: PlayerPushMaxAggregateInputType
  }

  export type PlayerPushGroupByOutputType = {
    id: number
    season: string
    user_id: number
    _count: PlayerPushCountAggregateOutputType | null
    _avg: PlayerPushAvgAggregateOutputType | null
    _sum: PlayerPushSumAggregateOutputType | null
    _min: PlayerPushMinAggregateOutputType | null
    _max: PlayerPushMaxAggregateOutputType | null
  }

  type GetPlayerPushGroupByPayload<T extends PlayerPushGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerPushGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerPushGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerPushGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerPushGroupByOutputType[P]>
        }
      >
    >


  export type PlayerPushSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPush"]>



  export type PlayerPushSelectScalar = {
    id?: boolean
    season?: boolean
    user_id?: boolean
  }

  export type PlayerPushOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "season" | "user_id", ExtArgs["result"]["playerPush"]>
  export type PlayerPushInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerPushPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerPush"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      season: string
      user_id: number
    }, ExtArgs["result"]["playerPush"]>
    composites: {}
  }

  type PlayerPushGetPayload<S extends boolean | null | undefined | PlayerPushDefaultArgs> = $Result.GetResult<Prisma.$PlayerPushPayload, S>

  type PlayerPushCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerPushFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerPushCountAggregateInputType | true
    }

  export interface PlayerPushDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerPush'], meta: { name: 'PlayerPush' } }
    /**
     * Find zero or one PlayerPush that matches the filter.
     * @param {PlayerPushFindUniqueArgs} args - Arguments to find a PlayerPush
     * @example
     * // Get one PlayerPush
     * const playerPush = await prisma.playerPush.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerPushFindUniqueArgs>(args: SelectSubset<T, PlayerPushFindUniqueArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerPush that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerPushFindUniqueOrThrowArgs} args - Arguments to find a PlayerPush
     * @example
     * // Get one PlayerPush
     * const playerPush = await prisma.playerPush.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerPushFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerPushFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerPush that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushFindFirstArgs} args - Arguments to find a PlayerPush
     * @example
     * // Get one PlayerPush
     * const playerPush = await prisma.playerPush.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerPushFindFirstArgs>(args?: SelectSubset<T, PlayerPushFindFirstArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerPush that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushFindFirstOrThrowArgs} args - Arguments to find a PlayerPush
     * @example
     * // Get one PlayerPush
     * const playerPush = await prisma.playerPush.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerPushFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerPushFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerPushes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerPushes
     * const playerPushes = await prisma.playerPush.findMany()
     * 
     * // Get first 10 PlayerPushes
     * const playerPushes = await prisma.playerPush.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerPushWithIdOnly = await prisma.playerPush.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerPushFindManyArgs>(args?: SelectSubset<T, PlayerPushFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerPush.
     * @param {PlayerPushCreateArgs} args - Arguments to create a PlayerPush.
     * @example
     * // Create one PlayerPush
     * const PlayerPush = await prisma.playerPush.create({
     *   data: {
     *     // ... data to create a PlayerPush
     *   }
     * })
     * 
     */
    create<T extends PlayerPushCreateArgs>(args: SelectSubset<T, PlayerPushCreateArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerPushes.
     * @param {PlayerPushCreateManyArgs} args - Arguments to create many PlayerPushes.
     * @example
     * // Create many PlayerPushes
     * const playerPush = await prisma.playerPush.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerPushCreateManyArgs>(args?: SelectSubset<T, PlayerPushCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayerPush.
     * @param {PlayerPushDeleteArgs} args - Arguments to delete one PlayerPush.
     * @example
     * // Delete one PlayerPush
     * const PlayerPush = await prisma.playerPush.delete({
     *   where: {
     *     // ... filter to delete one PlayerPush
     *   }
     * })
     * 
     */
    delete<T extends PlayerPushDeleteArgs>(args: SelectSubset<T, PlayerPushDeleteArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerPush.
     * @param {PlayerPushUpdateArgs} args - Arguments to update one PlayerPush.
     * @example
     * // Update one PlayerPush
     * const playerPush = await prisma.playerPush.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerPushUpdateArgs>(args: SelectSubset<T, PlayerPushUpdateArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerPushes.
     * @param {PlayerPushDeleteManyArgs} args - Arguments to filter PlayerPushes to delete.
     * @example
     * // Delete a few PlayerPushes
     * const { count } = await prisma.playerPush.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerPushDeleteManyArgs>(args?: SelectSubset<T, PlayerPushDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerPushes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerPushes
     * const playerPush = await prisma.playerPush.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerPushUpdateManyArgs>(args: SelectSubset<T, PlayerPushUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayerPush.
     * @param {PlayerPushUpsertArgs} args - Arguments to update or create a PlayerPush.
     * @example
     * // Update or create a PlayerPush
     * const playerPush = await prisma.playerPush.upsert({
     *   create: {
     *     // ... data to create a PlayerPush
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerPush we want to update
     *   }
     * })
     */
    upsert<T extends PlayerPushUpsertArgs>(args: SelectSubset<T, PlayerPushUpsertArgs<ExtArgs>>): Prisma__PlayerPushClient<$Result.GetResult<Prisma.$PlayerPushPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerPushes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushCountArgs} args - Arguments to filter PlayerPushes to count.
     * @example
     * // Count the number of PlayerPushes
     * const count = await prisma.playerPush.count({
     *   where: {
     *     // ... the filter for the PlayerPushes we want to count
     *   }
     * })
    **/
    count<T extends PlayerPushCountArgs>(
      args?: Subset<T, PlayerPushCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerPushCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerPush.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerPushAggregateArgs>(args: Subset<T, PlayerPushAggregateArgs>): Prisma.PrismaPromise<GetPlayerPushAggregateType<T>>

    /**
     * Group by PlayerPush.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPushGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerPushGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerPushGroupByArgs['orderBy'] }
        : { orderBy?: PlayerPushGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerPushGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerPushGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerPush model
   */
  readonly fields: PlayerPushFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerPush.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerPushClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerPush model
   */
  interface PlayerPushFieldRefs {
    readonly id: FieldRef<"PlayerPush", 'Int'>
    readonly season: FieldRef<"PlayerPush", 'String'>
    readonly user_id: FieldRef<"PlayerPush", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerPush findUnique
   */
  export type PlayerPushFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPush to fetch.
     */
    where: PlayerPushWhereUniqueInput
  }

  /**
   * PlayerPush findUniqueOrThrow
   */
  export type PlayerPushFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPush to fetch.
     */
    where: PlayerPushWhereUniqueInput
  }

  /**
   * PlayerPush findFirst
   */
  export type PlayerPushFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPush to fetch.
     */
    where?: PlayerPushWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPushes to fetch.
     */
    orderBy?: PlayerPushOrderByWithRelationInput | PlayerPushOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerPushes.
     */
    cursor?: PlayerPushWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPushes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPushes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerPushes.
     */
    distinct?: PlayerPushScalarFieldEnum | PlayerPushScalarFieldEnum[]
  }

  /**
   * PlayerPush findFirstOrThrow
   */
  export type PlayerPushFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPush to fetch.
     */
    where?: PlayerPushWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPushes to fetch.
     */
    orderBy?: PlayerPushOrderByWithRelationInput | PlayerPushOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerPushes.
     */
    cursor?: PlayerPushWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPushes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPushes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerPushes.
     */
    distinct?: PlayerPushScalarFieldEnum | PlayerPushScalarFieldEnum[]
  }

  /**
   * PlayerPush findMany
   */
  export type PlayerPushFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPushes to fetch.
     */
    where?: PlayerPushWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPushes to fetch.
     */
    orderBy?: PlayerPushOrderByWithRelationInput | PlayerPushOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerPushes.
     */
    cursor?: PlayerPushWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPushes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPushes.
     */
    skip?: number
    distinct?: PlayerPushScalarFieldEnum | PlayerPushScalarFieldEnum[]
  }

  /**
   * PlayerPush create
   */
  export type PlayerPushCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerPush.
     */
    data: XOR<PlayerPushCreateInput, PlayerPushUncheckedCreateInput>
  }

  /**
   * PlayerPush createMany
   */
  export type PlayerPushCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerPushes.
     */
    data: PlayerPushCreateManyInput | PlayerPushCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerPush update
   */
  export type PlayerPushUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerPush.
     */
    data: XOR<PlayerPushUpdateInput, PlayerPushUncheckedUpdateInput>
    /**
     * Choose, which PlayerPush to update.
     */
    where: PlayerPushWhereUniqueInput
  }

  /**
   * PlayerPush updateMany
   */
  export type PlayerPushUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerPushes.
     */
    data: XOR<PlayerPushUpdateManyMutationInput, PlayerPushUncheckedUpdateManyInput>
    /**
     * Filter which PlayerPushes to update
     */
    where?: PlayerPushWhereInput
    /**
     * Limit how many PlayerPushes to update.
     */
    limit?: number
  }

  /**
   * PlayerPush upsert
   */
  export type PlayerPushUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerPush to update in case it exists.
     */
    where: PlayerPushWhereUniqueInput
    /**
     * In case the PlayerPush found by the `where` argument doesn't exist, create a new PlayerPush with this data.
     */
    create: XOR<PlayerPushCreateInput, PlayerPushUncheckedCreateInput>
    /**
     * In case the PlayerPush was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerPushUpdateInput, PlayerPushUncheckedUpdateInput>
  }

  /**
   * PlayerPush delete
   */
  export type PlayerPushDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
    /**
     * Filter which PlayerPush to delete.
     */
    where: PlayerPushWhereUniqueInput
  }

  /**
   * PlayerPush deleteMany
   */
  export type PlayerPushDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPushes to delete
     */
    where?: PlayerPushWhereInput
    /**
     * Limit how many PlayerPushes to delete.
     */
    limit?: number
  }

  /**
   * PlayerPush without action
   */
  export type PlayerPushDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPush
     */
    select?: PlayerPushSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPush
     */
    omit?: PlayerPushOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPushInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    phone: 'phone',
    password: 'password',
    tag: 'tag',
    trophies: 'trophies',
    best_position: 'best_position',
    earnigns: 'earnigns'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Last_positionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    position: 'position',
    trophies: 'trophies'
  };

  export type Last_positionsScalarFieldEnum = (typeof Last_positionsScalarFieldEnum)[keyof typeof Last_positionsScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    value: 'value',
    mode: 'mode',
    season: 'season'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const PlayerPushScalarFieldEnum: {
    id: 'id',
    season: 'season',
    user_id: 'user_id'
  };

  export type PlayerPushScalarFieldEnum = (typeof PlayerPushScalarFieldEnum)[keyof typeof PlayerPushScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    username: 'username',
    phone: 'phone',
    password: 'password',
    tag: 'tag'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TicketsOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    season: 'season'
  };

  export type TicketsOrderByRelevanceFieldEnum = (typeof TicketsOrderByRelevanceFieldEnum)[keyof typeof TicketsOrderByRelevanceFieldEnum]


  export const PlayerPushOrderByRelevanceFieldEnum: {
    season: 'season'
  };

  export type PlayerPushOrderByRelevanceFieldEnum = (typeof PlayerPushOrderByRelevanceFieldEnum)[keyof typeof PlayerPushOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ModeTickets'
   */
  export type EnumModeTicketsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModeTickets'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    tag?: StringFilter<"User"> | string
    trophies?: IntFilter<"User"> | number
    best_position?: IntNullableFilter<"User"> | number | null
    earnigns?: FloatFilter<"User"> | number
    Last_positions?: Last_positionsListRelationFilter
    PlayerPush?: PlayerPushListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    tag?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrderInput | SortOrder
    earnigns?: SortOrder
    Last_positions?: Last_positionsOrderByRelationAggregateInput
    PlayerPush?: PlayerPushOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    tag?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    trophies?: IntFilter<"User"> | number
    best_position?: IntNullableFilter<"User"> | number | null
    earnigns?: FloatFilter<"User"> | number
    Last_positions?: Last_positionsListRelationFilter
    PlayerPush?: PlayerPushListRelationFilter
  }, "id" | "email" | "phone" | "tag">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    tag?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrderInput | SortOrder
    earnigns?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    tag?: StringWithAggregatesFilter<"User"> | string
    trophies?: IntWithAggregatesFilter<"User"> | number
    best_position?: IntNullableWithAggregatesFilter<"User"> | number | null
    earnigns?: FloatWithAggregatesFilter<"User"> | number
  }

  export type Last_positionsWhereInput = {
    AND?: Last_positionsWhereInput | Last_positionsWhereInput[]
    OR?: Last_positionsWhereInput[]
    NOT?: Last_positionsWhereInput | Last_positionsWhereInput[]
    id?: IntFilter<"Last_positions"> | number
    user_id?: IntFilter<"Last_positions"> | number
    position?: IntFilter<"Last_positions"> | number
    trophies?: IntFilter<"Last_positions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Last_positionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Last_positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Last_positionsWhereInput | Last_positionsWhereInput[]
    OR?: Last_positionsWhereInput[]
    NOT?: Last_positionsWhereInput | Last_positionsWhereInput[]
    user_id?: IntFilter<"Last_positions"> | number
    position?: IntFilter<"Last_positions"> | number
    trophies?: IntFilter<"Last_positions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Last_positionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
    _count?: Last_positionsCountOrderByAggregateInput
    _avg?: Last_positionsAvgOrderByAggregateInput
    _max?: Last_positionsMaxOrderByAggregateInput
    _min?: Last_positionsMinOrderByAggregateInput
    _sum?: Last_positionsSumOrderByAggregateInput
  }

  export type Last_positionsScalarWhereWithAggregatesInput = {
    AND?: Last_positionsScalarWhereWithAggregatesInput | Last_positionsScalarWhereWithAggregatesInput[]
    OR?: Last_positionsScalarWhereWithAggregatesInput[]
    NOT?: Last_positionsScalarWhereWithAggregatesInput | Last_positionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Last_positions"> | number
    user_id?: IntWithAggregatesFilter<"Last_positions"> | number
    position?: IntWithAggregatesFilter<"Last_positions"> | number
    trophies?: IntWithAggregatesFilter<"Last_positions"> | number
  }

  export type TicketsWhereInput = {
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    id?: IntFilter<"Tickets"> | number
    uuid?: StringFilter<"Tickets"> | string
    value?: FloatFilter<"Tickets"> | number
    mode?: EnumModeTicketsFilter<"Tickets"> | $Enums.ModeTickets
    season?: StringFilter<"Tickets"> | string
  }

  export type TicketsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    value?: SortOrder
    mode?: SortOrder
    season?: SortOrder
    _relevance?: TicketsOrderByRelevanceInput
  }

  export type TicketsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    season?: string
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    uuid?: StringFilter<"Tickets"> | string
    value?: FloatFilter<"Tickets"> | number
    mode?: EnumModeTicketsFilter<"Tickets"> | $Enums.ModeTickets
  }, "id" | "season">

  export type TicketsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    value?: SortOrder
    mode?: SortOrder
    season?: SortOrder
    _count?: TicketsCountOrderByAggregateInput
    _avg?: TicketsAvgOrderByAggregateInput
    _max?: TicketsMaxOrderByAggregateInput
    _min?: TicketsMinOrderByAggregateInput
    _sum?: TicketsSumOrderByAggregateInput
  }

  export type TicketsScalarWhereWithAggregatesInput = {
    AND?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    OR?: TicketsScalarWhereWithAggregatesInput[]
    NOT?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tickets"> | number
    uuid?: StringWithAggregatesFilter<"Tickets"> | string
    value?: FloatWithAggregatesFilter<"Tickets"> | number
    mode?: EnumModeTicketsWithAggregatesFilter<"Tickets"> | $Enums.ModeTickets
    season?: StringWithAggregatesFilter<"Tickets"> | string
  }

  export type PlayerPushWhereInput = {
    AND?: PlayerPushWhereInput | PlayerPushWhereInput[]
    OR?: PlayerPushWhereInput[]
    NOT?: PlayerPushWhereInput | PlayerPushWhereInput[]
    id?: IntFilter<"PlayerPush"> | number
    season?: StringFilter<"PlayerPush"> | string
    user_id?: IntFilter<"PlayerPush"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayerPushOrderByWithRelationInput = {
    id?: SortOrder
    season?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PlayerPushOrderByRelevanceInput
  }

  export type PlayerPushWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayerPushWhereInput | PlayerPushWhereInput[]
    OR?: PlayerPushWhereInput[]
    NOT?: PlayerPushWhereInput | PlayerPushWhereInput[]
    season?: StringFilter<"PlayerPush"> | string
    user_id?: IntFilter<"PlayerPush"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayerPushOrderByWithAggregationInput = {
    id?: SortOrder
    season?: SortOrder
    user_id?: SortOrder
    _count?: PlayerPushCountOrderByAggregateInput
    _avg?: PlayerPushAvgOrderByAggregateInput
    _max?: PlayerPushMaxOrderByAggregateInput
    _min?: PlayerPushMinOrderByAggregateInput
    _sum?: PlayerPushSumOrderByAggregateInput
  }

  export type PlayerPushScalarWhereWithAggregatesInput = {
    AND?: PlayerPushScalarWhereWithAggregatesInput | PlayerPushScalarWhereWithAggregatesInput[]
    OR?: PlayerPushScalarWhereWithAggregatesInput[]
    NOT?: PlayerPushScalarWhereWithAggregatesInput | PlayerPushScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerPush"> | number
    season?: StringWithAggregatesFilter<"PlayerPush"> | string
    user_id?: IntWithAggregatesFilter<"PlayerPush"> | number
  }

  export type UserCreateInput = {
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
    Last_positions?: Last_positionsCreateNestedManyWithoutUserInput
    PlayerPush?: PlayerPushCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
    Last_positions?: Last_positionsUncheckedCreateNestedManyWithoutUserInput
    PlayerPush?: PlayerPushUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
    Last_positions?: Last_positionsUpdateManyWithoutUserNestedInput
    PlayerPush?: PlayerPushUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
    Last_positions?: Last_positionsUncheckedUpdateManyWithoutUserNestedInput
    PlayerPush?: PlayerPushUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
  }

  export type Last_positionsCreateInput = {
    position: number
    trophies: number
    user: UserCreateNestedOneWithoutLast_positionsInput
  }

  export type Last_positionsUncheckedCreateInput = {
    id?: number
    user_id: number
    position: number
    trophies: number
  }

  export type Last_positionsUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLast_positionsNestedInput
  }

  export type Last_positionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
  }

  export type Last_positionsCreateManyInput = {
    id?: number
    user_id: number
    position: number
    trophies: number
  }

  export type Last_positionsUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
  }

  export type Last_positionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
  }

  export type TicketsCreateInput = {
    uuid?: string
    value: number
    mode: $Enums.ModeTickets
    season: string
  }

  export type TicketsUncheckedCreateInput = {
    id?: number
    uuid?: string
    value: number
    mode: $Enums.ModeTickets
    season: string
  }

  export type TicketsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    mode?: EnumModeTicketsFieldUpdateOperationsInput | $Enums.ModeTickets
    season?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    mode?: EnumModeTicketsFieldUpdateOperationsInput | $Enums.ModeTickets
    season?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsCreateManyInput = {
    id?: number
    uuid?: string
    value: number
    mode: $Enums.ModeTickets
    season: string
  }

  export type TicketsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    mode?: EnumModeTicketsFieldUpdateOperationsInput | $Enums.ModeTickets
    season?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    mode?: EnumModeTicketsFieldUpdateOperationsInput | $Enums.ModeTickets
    season?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerPushCreateInput = {
    season: string
    user: UserCreateNestedOneWithoutPlayerPushInput
  }

  export type PlayerPushUncheckedCreateInput = {
    id?: number
    season: string
    user_id: number
  }

  export type PlayerPushUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPlayerPushNestedInput
  }

  export type PlayerPushUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPushCreateManyInput = {
    id?: number
    season: string
    user_id: number
  }

  export type PlayerPushUpdateManyMutationInput = {
    season?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerPushUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Last_positionsListRelationFilter = {
    every?: Last_positionsWhereInput
    some?: Last_positionsWhereInput
    none?: Last_positionsWhereInput
  }

  export type PlayerPushListRelationFilter = {
    every?: PlayerPushWhereInput
    some?: PlayerPushWhereInput
    none?: PlayerPushWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Last_positionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerPushOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    tag?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrder
    earnigns?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrder
    earnigns?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    tag?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrder
    earnigns?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    tag?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrder
    earnigns?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    trophies?: SortOrder
    best_position?: SortOrder
    earnigns?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Last_positionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
  }

  export type Last_positionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
  }

  export type Last_positionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
  }

  export type Last_positionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
  }

  export type Last_positionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position?: SortOrder
    trophies?: SortOrder
  }

  export type EnumModeTicketsFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeTickets | EnumModeTicketsFieldRefInput<$PrismaModel>
    in?: $Enums.ModeTickets[]
    notIn?: $Enums.ModeTickets[]
    not?: NestedEnumModeTicketsFilter<$PrismaModel> | $Enums.ModeTickets
  }

  export type TicketsOrderByRelevanceInput = {
    fields: TicketsOrderByRelevanceFieldEnum | TicketsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    value?: SortOrder
    mode?: SortOrder
    season?: SortOrder
  }

  export type TicketsAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type TicketsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    value?: SortOrder
    mode?: SortOrder
    season?: SortOrder
  }

  export type TicketsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    value?: SortOrder
    mode?: SortOrder
    season?: SortOrder
  }

  export type TicketsSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type EnumModeTicketsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeTickets | EnumModeTicketsFieldRefInput<$PrismaModel>
    in?: $Enums.ModeTickets[]
    notIn?: $Enums.ModeTickets[]
    not?: NestedEnumModeTicketsWithAggregatesFilter<$PrismaModel> | $Enums.ModeTickets
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModeTicketsFilter<$PrismaModel>
    _max?: NestedEnumModeTicketsFilter<$PrismaModel>
  }

  export type PlayerPushOrderByRelevanceInput = {
    fields: PlayerPushOrderByRelevanceFieldEnum | PlayerPushOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlayerPushCountOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    user_id?: SortOrder
  }

  export type PlayerPushAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type PlayerPushMaxOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    user_id?: SortOrder
  }

  export type PlayerPushMinOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    user_id?: SortOrder
  }

  export type PlayerPushSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Last_positionsCreateNestedManyWithoutUserInput = {
    create?: XOR<Last_positionsCreateWithoutUserInput, Last_positionsUncheckedCreateWithoutUserInput> | Last_positionsCreateWithoutUserInput[] | Last_positionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Last_positionsCreateOrConnectWithoutUserInput | Last_positionsCreateOrConnectWithoutUserInput[]
    createMany?: Last_positionsCreateManyUserInputEnvelope
    connect?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
  }

  export type PlayerPushCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerPushCreateWithoutUserInput, PlayerPushUncheckedCreateWithoutUserInput> | PlayerPushCreateWithoutUserInput[] | PlayerPushUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerPushCreateOrConnectWithoutUserInput | PlayerPushCreateOrConnectWithoutUserInput[]
    createMany?: PlayerPushCreateManyUserInputEnvelope
    connect?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
  }

  export type Last_positionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Last_positionsCreateWithoutUserInput, Last_positionsUncheckedCreateWithoutUserInput> | Last_positionsCreateWithoutUserInput[] | Last_positionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Last_positionsCreateOrConnectWithoutUserInput | Last_positionsCreateOrConnectWithoutUserInput[]
    createMany?: Last_positionsCreateManyUserInputEnvelope
    connect?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
  }

  export type PlayerPushUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerPushCreateWithoutUserInput, PlayerPushUncheckedCreateWithoutUserInput> | PlayerPushCreateWithoutUserInput[] | PlayerPushUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerPushCreateOrConnectWithoutUserInput | PlayerPushCreateOrConnectWithoutUserInput[]
    createMany?: PlayerPushCreateManyUserInputEnvelope
    connect?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Last_positionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Last_positionsCreateWithoutUserInput, Last_positionsUncheckedCreateWithoutUserInput> | Last_positionsCreateWithoutUserInput[] | Last_positionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Last_positionsCreateOrConnectWithoutUserInput | Last_positionsCreateOrConnectWithoutUserInput[]
    upsert?: Last_positionsUpsertWithWhereUniqueWithoutUserInput | Last_positionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Last_positionsCreateManyUserInputEnvelope
    set?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    disconnect?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    delete?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    connect?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    update?: Last_positionsUpdateWithWhereUniqueWithoutUserInput | Last_positionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Last_positionsUpdateManyWithWhereWithoutUserInput | Last_positionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Last_positionsScalarWhereInput | Last_positionsScalarWhereInput[]
  }

  export type PlayerPushUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerPushCreateWithoutUserInput, PlayerPushUncheckedCreateWithoutUserInput> | PlayerPushCreateWithoutUserInput[] | PlayerPushUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerPushCreateOrConnectWithoutUserInput | PlayerPushCreateOrConnectWithoutUserInput[]
    upsert?: PlayerPushUpsertWithWhereUniqueWithoutUserInput | PlayerPushUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerPushCreateManyUserInputEnvelope
    set?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    disconnect?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    delete?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    connect?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    update?: PlayerPushUpdateWithWhereUniqueWithoutUserInput | PlayerPushUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerPushUpdateManyWithWhereWithoutUserInput | PlayerPushUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerPushScalarWhereInput | PlayerPushScalarWhereInput[]
  }

  export type Last_positionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Last_positionsCreateWithoutUserInput, Last_positionsUncheckedCreateWithoutUserInput> | Last_positionsCreateWithoutUserInput[] | Last_positionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Last_positionsCreateOrConnectWithoutUserInput | Last_positionsCreateOrConnectWithoutUserInput[]
    upsert?: Last_positionsUpsertWithWhereUniqueWithoutUserInput | Last_positionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Last_positionsCreateManyUserInputEnvelope
    set?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    disconnect?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    delete?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    connect?: Last_positionsWhereUniqueInput | Last_positionsWhereUniqueInput[]
    update?: Last_positionsUpdateWithWhereUniqueWithoutUserInput | Last_positionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Last_positionsUpdateManyWithWhereWithoutUserInput | Last_positionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Last_positionsScalarWhereInput | Last_positionsScalarWhereInput[]
  }

  export type PlayerPushUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerPushCreateWithoutUserInput, PlayerPushUncheckedCreateWithoutUserInput> | PlayerPushCreateWithoutUserInput[] | PlayerPushUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerPushCreateOrConnectWithoutUserInput | PlayerPushCreateOrConnectWithoutUserInput[]
    upsert?: PlayerPushUpsertWithWhereUniqueWithoutUserInput | PlayerPushUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerPushCreateManyUserInputEnvelope
    set?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    disconnect?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    delete?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    connect?: PlayerPushWhereUniqueInput | PlayerPushWhereUniqueInput[]
    update?: PlayerPushUpdateWithWhereUniqueWithoutUserInput | PlayerPushUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerPushUpdateManyWithWhereWithoutUserInput | PlayerPushUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerPushScalarWhereInput | PlayerPushScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLast_positionsInput = {
    create?: XOR<UserCreateWithoutLast_positionsInput, UserUncheckedCreateWithoutLast_positionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLast_positionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLast_positionsNestedInput = {
    create?: XOR<UserCreateWithoutLast_positionsInput, UserUncheckedCreateWithoutLast_positionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLast_positionsInput
    upsert?: UserUpsertWithoutLast_positionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLast_positionsInput, UserUpdateWithoutLast_positionsInput>, UserUncheckedUpdateWithoutLast_positionsInput>
  }

  export type EnumModeTicketsFieldUpdateOperationsInput = {
    set?: $Enums.ModeTickets
  }

  export type UserCreateNestedOneWithoutPlayerPushInput = {
    create?: XOR<UserCreateWithoutPlayerPushInput, UserUncheckedCreateWithoutPlayerPushInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerPushInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlayerPushNestedInput = {
    create?: XOR<UserCreateWithoutPlayerPushInput, UserUncheckedCreateWithoutPlayerPushInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerPushInput
    upsert?: UserUpsertWithoutPlayerPushInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerPushInput, UserUpdateWithoutPlayerPushInput>, UserUncheckedUpdateWithoutPlayerPushInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumModeTicketsFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeTickets | EnumModeTicketsFieldRefInput<$PrismaModel>
    in?: $Enums.ModeTickets[]
    notIn?: $Enums.ModeTickets[]
    not?: NestedEnumModeTicketsFilter<$PrismaModel> | $Enums.ModeTickets
  }

  export type NestedEnumModeTicketsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeTickets | EnumModeTicketsFieldRefInput<$PrismaModel>
    in?: $Enums.ModeTickets[]
    notIn?: $Enums.ModeTickets[]
    not?: NestedEnumModeTicketsWithAggregatesFilter<$PrismaModel> | $Enums.ModeTickets
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModeTicketsFilter<$PrismaModel>
    _max?: NestedEnumModeTicketsFilter<$PrismaModel>
  }

  export type Last_positionsCreateWithoutUserInput = {
    position: number
    trophies: number
  }

  export type Last_positionsUncheckedCreateWithoutUserInput = {
    id?: number
    position: number
    trophies: number
  }

  export type Last_positionsCreateOrConnectWithoutUserInput = {
    where: Last_positionsWhereUniqueInput
    create: XOR<Last_positionsCreateWithoutUserInput, Last_positionsUncheckedCreateWithoutUserInput>
  }

  export type Last_positionsCreateManyUserInputEnvelope = {
    data: Last_positionsCreateManyUserInput | Last_positionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayerPushCreateWithoutUserInput = {
    season: string
  }

  export type PlayerPushUncheckedCreateWithoutUserInput = {
    id?: number
    season: string
  }

  export type PlayerPushCreateOrConnectWithoutUserInput = {
    where: PlayerPushWhereUniqueInput
    create: XOR<PlayerPushCreateWithoutUserInput, PlayerPushUncheckedCreateWithoutUserInput>
  }

  export type PlayerPushCreateManyUserInputEnvelope = {
    data: PlayerPushCreateManyUserInput | PlayerPushCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Last_positionsUpsertWithWhereUniqueWithoutUserInput = {
    where: Last_positionsWhereUniqueInput
    update: XOR<Last_positionsUpdateWithoutUserInput, Last_positionsUncheckedUpdateWithoutUserInput>
    create: XOR<Last_positionsCreateWithoutUserInput, Last_positionsUncheckedCreateWithoutUserInput>
  }

  export type Last_positionsUpdateWithWhereUniqueWithoutUserInput = {
    where: Last_positionsWhereUniqueInput
    data: XOR<Last_positionsUpdateWithoutUserInput, Last_positionsUncheckedUpdateWithoutUserInput>
  }

  export type Last_positionsUpdateManyWithWhereWithoutUserInput = {
    where: Last_positionsScalarWhereInput
    data: XOR<Last_positionsUpdateManyMutationInput, Last_positionsUncheckedUpdateManyWithoutUserInput>
  }

  export type Last_positionsScalarWhereInput = {
    AND?: Last_positionsScalarWhereInput | Last_positionsScalarWhereInput[]
    OR?: Last_positionsScalarWhereInput[]
    NOT?: Last_positionsScalarWhereInput | Last_positionsScalarWhereInput[]
    id?: IntFilter<"Last_positions"> | number
    user_id?: IntFilter<"Last_positions"> | number
    position?: IntFilter<"Last_positions"> | number
    trophies?: IntFilter<"Last_positions"> | number
  }

  export type PlayerPushUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayerPushWhereUniqueInput
    update: XOR<PlayerPushUpdateWithoutUserInput, PlayerPushUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerPushCreateWithoutUserInput, PlayerPushUncheckedCreateWithoutUserInput>
  }

  export type PlayerPushUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayerPushWhereUniqueInput
    data: XOR<PlayerPushUpdateWithoutUserInput, PlayerPushUncheckedUpdateWithoutUserInput>
  }

  export type PlayerPushUpdateManyWithWhereWithoutUserInput = {
    where: PlayerPushScalarWhereInput
    data: XOR<PlayerPushUpdateManyMutationInput, PlayerPushUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayerPushScalarWhereInput = {
    AND?: PlayerPushScalarWhereInput | PlayerPushScalarWhereInput[]
    OR?: PlayerPushScalarWhereInput[]
    NOT?: PlayerPushScalarWhereInput | PlayerPushScalarWhereInput[]
    id?: IntFilter<"PlayerPush"> | number
    season?: StringFilter<"PlayerPush"> | string
    user_id?: IntFilter<"PlayerPush"> | number
  }

  export type UserCreateWithoutLast_positionsInput = {
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
    PlayerPush?: PlayerPushCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLast_positionsInput = {
    id?: number
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
    PlayerPush?: PlayerPushUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLast_positionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLast_positionsInput, UserUncheckedCreateWithoutLast_positionsInput>
  }

  export type UserUpsertWithoutLast_positionsInput = {
    update: XOR<UserUpdateWithoutLast_positionsInput, UserUncheckedUpdateWithoutLast_positionsInput>
    create: XOR<UserCreateWithoutLast_positionsInput, UserUncheckedCreateWithoutLast_positionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLast_positionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLast_positionsInput, UserUncheckedUpdateWithoutLast_positionsInput>
  }

  export type UserUpdateWithoutLast_positionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
    PlayerPush?: PlayerPushUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLast_positionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
    PlayerPush?: PlayerPushUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPlayerPushInput = {
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
    Last_positions?: Last_positionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlayerPushInput = {
    id?: number
    email: string
    username: string
    phone: string
    password: string
    tag: string
    trophies?: number
    best_position?: number | null
    earnigns?: number
    Last_positions?: Last_positionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayerPushInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerPushInput, UserUncheckedCreateWithoutPlayerPushInput>
  }

  export type UserUpsertWithoutPlayerPushInput = {
    update: XOR<UserUpdateWithoutPlayerPushInput, UserUncheckedUpdateWithoutPlayerPushInput>
    create: XOR<UserCreateWithoutPlayerPushInput, UserUncheckedCreateWithoutPlayerPushInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerPushInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerPushInput, UserUncheckedUpdateWithoutPlayerPushInput>
  }

  export type UserUpdateWithoutPlayerPushInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
    Last_positions?: Last_positionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerPushInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    trophies?: IntFieldUpdateOperationsInput | number
    best_position?: NullableIntFieldUpdateOperationsInput | number | null
    earnigns?: FloatFieldUpdateOperationsInput | number
    Last_positions?: Last_positionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Last_positionsCreateManyUserInput = {
    id?: number
    position: number
    trophies: number
  }

  export type PlayerPushCreateManyUserInput = {
    id?: number
    season: string
  }

  export type Last_positionsUpdateWithoutUserInput = {
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
  }

  export type Last_positionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
  }

  export type Last_positionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    trophies?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPushUpdateWithoutUserInput = {
    season?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerPushUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerPushUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}