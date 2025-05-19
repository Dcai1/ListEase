
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
 * Model shopping_list
 * 
 */
export type shopping_list = $Result.DefaultSelection<Prisma.$shopping_listPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shopping_lists
 * const shopping_lists = await prisma.shopping_list.findMany()
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
   * // Fetch zero or more Shopping_lists
   * const shopping_lists = await prisma.shopping_list.findMany()
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
   * `prisma.shopping_list`: Exposes CRUD operations for the **shopping_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shopping_lists
    * const shopping_lists = await prisma.shopping_list.findMany()
    * ```
    */
  get shopping_list(): Prisma.shopping_listDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    shopping_list: 'shopping_list'
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
      modelProps: "shopping_list"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      shopping_list: {
        payload: Prisma.$shopping_listPayload<ExtArgs>
        fields: Prisma.shopping_listFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shopping_listFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shopping_listFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>
          }
          findFirst: {
            args: Prisma.shopping_listFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shopping_listFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>
          }
          findMany: {
            args: Prisma.shopping_listFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>[]
          }
          create: {
            args: Prisma.shopping_listCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>
          }
          createMany: {
            args: Prisma.shopping_listCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.shopping_listDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>
          }
          update: {
            args: Prisma.shopping_listUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>
          }
          deleteMany: {
            args: Prisma.shopping_listDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shopping_listUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.shopping_listUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shopping_listPayload>
          }
          aggregate: {
            args: Prisma.Shopping_listAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopping_list>
          }
          groupBy: {
            args: Prisma.shopping_listGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shopping_listGroupByOutputType>[]
          }
          count: {
            args: Prisma.shopping_listCountArgs<ExtArgs>
            result: $Utils.Optional<Shopping_listCountAggregateOutputType> | number
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
    shopping_list?: shopping_listOmit
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
   * Models
   */

  /**
   * Model shopping_list
   */

  export type AggregateShopping_list = {
    _count: Shopping_listCountAggregateOutputType | null
    _avg: Shopping_listAvgAggregateOutputType | null
    _sum: Shopping_listSumAggregateOutputType | null
    _min: Shopping_listMinAggregateOutputType | null
    _max: Shopping_listMaxAggregateOutputType | null
  }

  export type Shopping_listAvgAggregateOutputType = {
    id: number | null
    priority: number | null
    quantity: number | null
  }

  export type Shopping_listSumAggregateOutputType = {
    id: number | null
    priority: number | null
    quantity: number | null
  }

  export type Shopping_listMinAggregateOutputType = {
    id: number | null
    priority: number | null
    item: string | null
    quantity: number | null
    details: string | null
    date: Date | null
  }

  export type Shopping_listMaxAggregateOutputType = {
    id: number | null
    priority: number | null
    item: string | null
    quantity: number | null
    details: string | null
    date: Date | null
  }

  export type Shopping_listCountAggregateOutputType = {
    id: number
    priority: number
    item: number
    quantity: number
    details: number
    date: number
    _all: number
  }


  export type Shopping_listAvgAggregateInputType = {
    id?: true
    priority?: true
    quantity?: true
  }

  export type Shopping_listSumAggregateInputType = {
    id?: true
    priority?: true
    quantity?: true
  }

  export type Shopping_listMinAggregateInputType = {
    id?: true
    priority?: true
    item?: true
    quantity?: true
    details?: true
    date?: true
  }

  export type Shopping_listMaxAggregateInputType = {
    id?: true
    priority?: true
    item?: true
    quantity?: true
    details?: true
    date?: true
  }

  export type Shopping_listCountAggregateInputType = {
    id?: true
    priority?: true
    item?: true
    quantity?: true
    details?: true
    date?: true
    _all?: true
  }

  export type Shopping_listAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shopping_list to aggregate.
     */
    where?: shopping_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopping_lists to fetch.
     */
    orderBy?: shopping_listOrderByWithRelationInput | shopping_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shopping_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopping_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopping_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shopping_lists
    **/
    _count?: true | Shopping_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shopping_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shopping_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shopping_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shopping_listMaxAggregateInputType
  }

  export type GetShopping_listAggregateType<T extends Shopping_listAggregateArgs> = {
        [P in keyof T & keyof AggregateShopping_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopping_list[P]>
      : GetScalarType<T[P], AggregateShopping_list[P]>
  }




  export type shopping_listGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shopping_listWhereInput
    orderBy?: shopping_listOrderByWithAggregationInput | shopping_listOrderByWithAggregationInput[]
    by: Shopping_listScalarFieldEnum[] | Shopping_listScalarFieldEnum
    having?: shopping_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shopping_listCountAggregateInputType | true
    _avg?: Shopping_listAvgAggregateInputType
    _sum?: Shopping_listSumAggregateInputType
    _min?: Shopping_listMinAggregateInputType
    _max?: Shopping_listMaxAggregateInputType
  }

  export type Shopping_listGroupByOutputType = {
    id: number
    priority: number
    item: string
    quantity: number
    details: string | null
    date: Date
    _count: Shopping_listCountAggregateOutputType | null
    _avg: Shopping_listAvgAggregateOutputType | null
    _sum: Shopping_listSumAggregateOutputType | null
    _min: Shopping_listMinAggregateOutputType | null
    _max: Shopping_listMaxAggregateOutputType | null
  }

  type GetShopping_listGroupByPayload<T extends shopping_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shopping_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shopping_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shopping_listGroupByOutputType[P]>
            : GetScalarType<T[P], Shopping_listGroupByOutputType[P]>
        }
      >
    >


  export type shopping_listSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priority?: boolean
    item?: boolean
    quantity?: boolean
    details?: boolean
    date?: boolean
  }, ExtArgs["result"]["shopping_list"]>



  export type shopping_listSelectScalar = {
    id?: boolean
    priority?: boolean
    item?: boolean
    quantity?: boolean
    details?: boolean
    date?: boolean
  }

  export type shopping_listOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "priority" | "item" | "quantity" | "details" | "date", ExtArgs["result"]["shopping_list"]>

  export type $shopping_listPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shopping_list"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      priority: number
      item: string
      quantity: number
      details: string | null
      date: Date
    }, ExtArgs["result"]["shopping_list"]>
    composites: {}
  }

  type shopping_listGetPayload<S extends boolean | null | undefined | shopping_listDefaultArgs> = $Result.GetResult<Prisma.$shopping_listPayload, S>

  type shopping_listCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shopping_listFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shopping_listCountAggregateInputType | true
    }

  export interface shopping_listDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shopping_list'], meta: { name: 'shopping_list' } }
    /**
     * Find zero or one Shopping_list that matches the filter.
     * @param {shopping_listFindUniqueArgs} args - Arguments to find a Shopping_list
     * @example
     * // Get one Shopping_list
     * const shopping_list = await prisma.shopping_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shopping_listFindUniqueArgs>(args: SelectSubset<T, shopping_listFindUniqueArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shopping_list that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shopping_listFindUniqueOrThrowArgs} args - Arguments to find a Shopping_list
     * @example
     * // Get one Shopping_list
     * const shopping_list = await prisma.shopping_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shopping_listFindUniqueOrThrowArgs>(args: SelectSubset<T, shopping_listFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shopping_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopping_listFindFirstArgs} args - Arguments to find a Shopping_list
     * @example
     * // Get one Shopping_list
     * const shopping_list = await prisma.shopping_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shopping_listFindFirstArgs>(args?: SelectSubset<T, shopping_listFindFirstArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shopping_list that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopping_listFindFirstOrThrowArgs} args - Arguments to find a Shopping_list
     * @example
     * // Get one Shopping_list
     * const shopping_list = await prisma.shopping_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shopping_listFindFirstOrThrowArgs>(args?: SelectSubset<T, shopping_listFindFirstOrThrowArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shopping_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopping_listFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shopping_lists
     * const shopping_lists = await prisma.shopping_list.findMany()
     * 
     * // Get first 10 Shopping_lists
     * const shopping_lists = await prisma.shopping_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopping_listWithIdOnly = await prisma.shopping_list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shopping_listFindManyArgs>(args?: SelectSubset<T, shopping_listFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shopping_list.
     * @param {shopping_listCreateArgs} args - Arguments to create a Shopping_list.
     * @example
     * // Create one Shopping_list
     * const Shopping_list = await prisma.shopping_list.create({
     *   data: {
     *     // ... data to create a Shopping_list
     *   }
     * })
     * 
     */
    create<T extends shopping_listCreateArgs>(args: SelectSubset<T, shopping_listCreateArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shopping_lists.
     * @param {shopping_listCreateManyArgs} args - Arguments to create many Shopping_lists.
     * @example
     * // Create many Shopping_lists
     * const shopping_list = await prisma.shopping_list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shopping_listCreateManyArgs>(args?: SelectSubset<T, shopping_listCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shopping_list.
     * @param {shopping_listDeleteArgs} args - Arguments to delete one Shopping_list.
     * @example
     * // Delete one Shopping_list
     * const Shopping_list = await prisma.shopping_list.delete({
     *   where: {
     *     // ... filter to delete one Shopping_list
     *   }
     * })
     * 
     */
    delete<T extends shopping_listDeleteArgs>(args: SelectSubset<T, shopping_listDeleteArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shopping_list.
     * @param {shopping_listUpdateArgs} args - Arguments to update one Shopping_list.
     * @example
     * // Update one Shopping_list
     * const shopping_list = await prisma.shopping_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shopping_listUpdateArgs>(args: SelectSubset<T, shopping_listUpdateArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shopping_lists.
     * @param {shopping_listDeleteManyArgs} args - Arguments to filter Shopping_lists to delete.
     * @example
     * // Delete a few Shopping_lists
     * const { count } = await prisma.shopping_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shopping_listDeleteManyArgs>(args?: SelectSubset<T, shopping_listDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shopping_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopping_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shopping_lists
     * const shopping_list = await prisma.shopping_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shopping_listUpdateManyArgs>(args: SelectSubset<T, shopping_listUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shopping_list.
     * @param {shopping_listUpsertArgs} args - Arguments to update or create a Shopping_list.
     * @example
     * // Update or create a Shopping_list
     * const shopping_list = await prisma.shopping_list.upsert({
     *   create: {
     *     // ... data to create a Shopping_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shopping_list we want to update
     *   }
     * })
     */
    upsert<T extends shopping_listUpsertArgs>(args: SelectSubset<T, shopping_listUpsertArgs<ExtArgs>>): Prisma__shopping_listClient<$Result.GetResult<Prisma.$shopping_listPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shopping_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopping_listCountArgs} args - Arguments to filter Shopping_lists to count.
     * @example
     * // Count the number of Shopping_lists
     * const count = await prisma.shopping_list.count({
     *   where: {
     *     // ... the filter for the Shopping_lists we want to count
     *   }
     * })
    **/
    count<T extends shopping_listCountArgs>(
      args?: Subset<T, shopping_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shopping_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shopping_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Shopping_listAggregateArgs>(args: Subset<T, Shopping_listAggregateArgs>): Prisma.PrismaPromise<GetShopping_listAggregateType<T>>

    /**
     * Group by Shopping_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shopping_listGroupByArgs} args - Group by arguments.
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
      T extends shopping_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shopping_listGroupByArgs['orderBy'] }
        : { orderBy?: shopping_listGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shopping_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopping_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shopping_list model
   */
  readonly fields: shopping_listFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shopping_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shopping_listClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the shopping_list model
   */
  interface shopping_listFieldRefs {
    readonly id: FieldRef<"shopping_list", 'Int'>
    readonly priority: FieldRef<"shopping_list", 'Int'>
    readonly item: FieldRef<"shopping_list", 'String'>
    readonly quantity: FieldRef<"shopping_list", 'Int'>
    readonly details: FieldRef<"shopping_list", 'String'>
    readonly date: FieldRef<"shopping_list", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * shopping_list findUnique
   */
  export type shopping_listFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * Filter, which shopping_list to fetch.
     */
    where: shopping_listWhereUniqueInput
  }

  /**
   * shopping_list findUniqueOrThrow
   */
  export type shopping_listFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * Filter, which shopping_list to fetch.
     */
    where: shopping_listWhereUniqueInput
  }

  /**
   * shopping_list findFirst
   */
  export type shopping_listFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * Filter, which shopping_list to fetch.
     */
    where?: shopping_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopping_lists to fetch.
     */
    orderBy?: shopping_listOrderByWithRelationInput | shopping_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shopping_lists.
     */
    cursor?: shopping_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopping_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopping_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shopping_lists.
     */
    distinct?: Shopping_listScalarFieldEnum | Shopping_listScalarFieldEnum[]
  }

  /**
   * shopping_list findFirstOrThrow
   */
  export type shopping_listFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * Filter, which shopping_list to fetch.
     */
    where?: shopping_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopping_lists to fetch.
     */
    orderBy?: shopping_listOrderByWithRelationInput | shopping_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shopping_lists.
     */
    cursor?: shopping_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopping_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopping_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shopping_lists.
     */
    distinct?: Shopping_listScalarFieldEnum | Shopping_listScalarFieldEnum[]
  }

  /**
   * shopping_list findMany
   */
  export type shopping_listFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * Filter, which shopping_lists to fetch.
     */
    where?: shopping_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shopping_lists to fetch.
     */
    orderBy?: shopping_listOrderByWithRelationInput | shopping_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shopping_lists.
     */
    cursor?: shopping_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shopping_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shopping_lists.
     */
    skip?: number
    distinct?: Shopping_listScalarFieldEnum | Shopping_listScalarFieldEnum[]
  }

  /**
   * shopping_list create
   */
  export type shopping_listCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * The data needed to create a shopping_list.
     */
    data?: XOR<shopping_listCreateInput, shopping_listUncheckedCreateInput>
  }

  /**
   * shopping_list createMany
   */
  export type shopping_listCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shopping_lists.
     */
    data: shopping_listCreateManyInput | shopping_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shopping_list update
   */
  export type shopping_listUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * The data needed to update a shopping_list.
     */
    data: XOR<shopping_listUpdateInput, shopping_listUncheckedUpdateInput>
    /**
     * Choose, which shopping_list to update.
     */
    where: shopping_listWhereUniqueInput
  }

  /**
   * shopping_list updateMany
   */
  export type shopping_listUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shopping_lists.
     */
    data: XOR<shopping_listUpdateManyMutationInput, shopping_listUncheckedUpdateManyInput>
    /**
     * Filter which shopping_lists to update
     */
    where?: shopping_listWhereInput
    /**
     * Limit how many shopping_lists to update.
     */
    limit?: number
  }

  /**
   * shopping_list upsert
   */
  export type shopping_listUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * The filter to search for the shopping_list to update in case it exists.
     */
    where: shopping_listWhereUniqueInput
    /**
     * In case the shopping_list found by the `where` argument doesn't exist, create a new shopping_list with this data.
     */
    create: XOR<shopping_listCreateInput, shopping_listUncheckedCreateInput>
    /**
     * In case the shopping_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shopping_listUpdateInput, shopping_listUncheckedUpdateInput>
  }

  /**
   * shopping_list delete
   */
  export type shopping_listDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
    /**
     * Filter which shopping_list to delete.
     */
    where: shopping_listWhereUniqueInput
  }

  /**
   * shopping_list deleteMany
   */
  export type shopping_listDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shopping_lists to delete
     */
    where?: shopping_listWhereInput
    /**
     * Limit how many shopping_lists to delete.
     */
    limit?: number
  }

  /**
   * shopping_list without action
   */
  export type shopping_listDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shopping_list
     */
    select?: shopping_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shopping_list
     */
    omit?: shopping_listOmit<ExtArgs> | null
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


  export const Shopping_listScalarFieldEnum: {
    id: 'id',
    priority: 'priority',
    item: 'item',
    quantity: 'quantity',
    details: 'details',
    date: 'date'
  };

  export type Shopping_listScalarFieldEnum = (typeof Shopping_listScalarFieldEnum)[keyof typeof Shopping_listScalarFieldEnum]


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


  export const shopping_listOrderByRelevanceFieldEnum: {
    item: 'item',
    details: 'details'
  };

  export type shopping_listOrderByRelevanceFieldEnum = (typeof shopping_listOrderByRelevanceFieldEnum)[keyof typeof shopping_listOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type shopping_listWhereInput = {
    AND?: shopping_listWhereInput | shopping_listWhereInput[]
    OR?: shopping_listWhereInput[]
    NOT?: shopping_listWhereInput | shopping_listWhereInput[]
    id?: IntFilter<"shopping_list"> | number
    priority?: IntFilter<"shopping_list"> | number
    item?: StringFilter<"shopping_list"> | string
    quantity?: IntFilter<"shopping_list"> | number
    details?: StringNullableFilter<"shopping_list"> | string | null
    date?: DateTimeFilter<"shopping_list"> | Date | string
  }

  export type shopping_listOrderByWithRelationInput = {
    id?: SortOrder
    priority?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    details?: SortOrderInput | SortOrder
    date?: SortOrder
    _relevance?: shopping_listOrderByRelevanceInput
  }

  export type shopping_listWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    item?: string
    AND?: shopping_listWhereInput | shopping_listWhereInput[]
    OR?: shopping_listWhereInput[]
    NOT?: shopping_listWhereInput | shopping_listWhereInput[]
    priority?: IntFilter<"shopping_list"> | number
    quantity?: IntFilter<"shopping_list"> | number
    details?: StringNullableFilter<"shopping_list"> | string | null
    date?: DateTimeFilter<"shopping_list"> | Date | string
  }, "id" | "item">

  export type shopping_listOrderByWithAggregationInput = {
    id?: SortOrder
    priority?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    details?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: shopping_listCountOrderByAggregateInput
    _avg?: shopping_listAvgOrderByAggregateInput
    _max?: shopping_listMaxOrderByAggregateInput
    _min?: shopping_listMinOrderByAggregateInput
    _sum?: shopping_listSumOrderByAggregateInput
  }

  export type shopping_listScalarWhereWithAggregatesInput = {
    AND?: shopping_listScalarWhereWithAggregatesInput | shopping_listScalarWhereWithAggregatesInput[]
    OR?: shopping_listScalarWhereWithAggregatesInput[]
    NOT?: shopping_listScalarWhereWithAggregatesInput | shopping_listScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shopping_list"> | number
    priority?: IntWithAggregatesFilter<"shopping_list"> | number
    item?: StringWithAggregatesFilter<"shopping_list"> | string
    quantity?: IntWithAggregatesFilter<"shopping_list"> | number
    details?: StringNullableWithAggregatesFilter<"shopping_list"> | string | null
    date?: DateTimeWithAggregatesFilter<"shopping_list"> | Date | string
  }

  export type shopping_listCreateInput = {
    priority?: number
    item?: string
    quantity?: number
    details?: string | null
    date?: Date | string
  }

  export type shopping_listUncheckedCreateInput = {
    id?: number
    priority?: number
    item?: string
    quantity?: number
    details?: string | null
    date?: Date | string
  }

  export type shopping_listUpdateInput = {
    priority?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopping_listUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopping_listCreateManyInput = {
    id?: number
    priority?: number
    item?: string
    quantity?: number
    details?: string | null
    date?: Date | string
  }

  export type shopping_listUpdateManyMutationInput = {
    priority?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shopping_listUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type shopping_listOrderByRelevanceInput = {
    fields: shopping_listOrderByRelevanceFieldEnum | shopping_listOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type shopping_listCountOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    details?: SortOrder
    date?: SortOrder
  }

  export type shopping_listAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    quantity?: SortOrder
  }

  export type shopping_listMaxOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    details?: SortOrder
    date?: SortOrder
  }

  export type shopping_listMinOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    details?: SortOrder
    date?: SortOrder
  }

  export type shopping_listSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    quantity?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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