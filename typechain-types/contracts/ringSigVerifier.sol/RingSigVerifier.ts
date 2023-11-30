/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface RingSigVerifierInterface extends Interface {
  getFunction(nameOrSignature: "verifyRingSignature"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyRingSignature",
    values: [BigNumberish, BigNumberish[], BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyRingSignature",
    data: BytesLike
  ): Result;
}

export interface RingSigVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): RingSigVerifier;
  waitForDeployment(): Promise<this>;

  interface: RingSigVerifierInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  verifyRingSignature: TypedContractMethod<
    [
      message: BigNumberish,
      ring: BigNumberish[],
      responses: BigNumberish[],
      c: BigNumberish
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "verifyRingSignature"
  ): TypedContractMethod<
    [
      message: BigNumberish,
      ring: BigNumberish[],
      responses: BigNumberish[],
      c: BigNumberish
    ],
    [boolean],
    "view"
  >;

  filters: {};
}
