/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  RingSigVerifier,
  RingSigVerifierInterface,
} from "../../ringSigVerifier.sol/RingSigVerifier";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "strRing",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "r",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "previousC",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "previousPubKey",
        type: "uint256[2]",
      },
    ],
    name: "computeC",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "ring",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "responses",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "c",
        type: "uint256",
      },
    ],
    name: "verifyRingSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061148f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c434c5ee1461003b578063eae4ae8f1461006b575b600080fd5b61005560048036038101906100509190610a7f565b61009b565b6040516100629190610b55565b60405180910390f35b61008560048036038101906100809190610c21565b61031f565b6040516100929190610ce3565b60405180910390f35b6000600184511180156100bb57506000600285516100b99190610d2d565b145b6100fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100f190610de1565b60405180910390fd5b600284516101089190610e30565b83511461014a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014190610ed3565b60405180910390fd5b600061015585610594565b905060006101cb82888760008151811061017257610171610ef3565b5b60200260200101518760405180604001604052808c60008151811061019a57610199610ef3565b5b602002602001015181526020018c6001815181106101bb576101ba610ef3565b5b602002602001015181525061031f565b90506000600290505b865181101561027a576102648389886002856101f09190610e30565b8151811061020157610200610ef3565b5b60200260200101518560405180604001604052808d888151811061022857610227610ef3565b5b602002602001015181526020018d6001896102439190610f22565b8151811061025457610253610ef3565b5b602002602001015181525061031f565b91506002816102739190610f22565b90506101d4565b506103118288876001895161028f9190610f56565b815181106102a05761029f610ef3565b5b60200260200101518460405180604001604052808c60028e516102c39190610f56565b815181106102d4576102d3610ef3565b5b602002602001015181526020018c60018e516102f09190610f56565b8151811061030157610300610ef3565b5b602002602001015181525061031f565b841492505050949350505050565b60008073__$ac9df8564564f09022d97baa7c4ddef38f$__637670aa7673__$ac9df8564564f09022d97baa7c4ddef38f$__63cef3da1a8860405180604001604052807f79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f8179881526020017f483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b88152506040518363ffffffff1660e01b81526004016103c9929190611044565b606060405180830381865af41580156103e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040a9190611133565b73__$ac9df8564564f09022d97baa7c4ddef38f$__63cef3da1a88886040518363ffffffff1660e01b8152600401610443929190611044565b606060405180830381865af4158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190611133565b6040518363ffffffff1660e01b81526004016104a19291906111e4565b606060405180830381865af41580156104be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e29190611133565b905061050e817ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414161063a565b600087876040516020016105239291906113ae565b60405160208183030381529060405260405160200161054291906113e8565b6040516020818303038152906040529050610587818051906020012060001c7ffffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036414161073a565b9250505095945050505050565b6060600060405180602001604052806000815250905060005b835181101561063057818482815181106105ca576105c9610ef3565b5b6020026020010151856001846105e09190610f22565b815181106105f1576105f0610ef3565b5b602002602001015160405160200161060b93929190611420565b60405160208183030381529060405291506002816106299190610f22565b90506105ad565b5080915050919050565b600061065e8360026003811061065357610652610ef3565b5b60200201518361076d565b90506000828061067157610670610cfe565b5b8283099050828061068557610684610cfe565b5b818560006003811061069a57610699610ef3565b5b602002015109846000600381106106b4576106b3610ef3565b5b60200201818152505082806106cc576106cb610cfe565b5b83806106db576106da610cfe565b5b828409856001600381106106f2576106f1610ef3565b5b6020020151098460016003811061070c5761070b610ef3565b5b60200201818152505060018460026003811061072b5761072a610ef3565b5b60200201818152505050505050565b60008082846107499190610d2d565b905060008110156107635782816107609190610f22565b90505b8091505092915050565b60008083148061077c57508183145b806107875750600082145b1561079157600080fd5b818311156107ad578183816107a9576107a8610cfe565b5b0692505b600080600190506000849050600086905060005b600082146107fd578183816107d9576107d8610cfe565b5b049050838482028603838484028603809550819650829750839850505050506107c1565b60008512156108185784600003870395505050505050610821565b84955050505050505b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61088e82610845565b810181811067ffffffffffffffff821117156108ad576108ac610856565b5b80604052505050565b60006108c0610827565b90506108cc8282610885565b919050565b600067ffffffffffffffff8211156108ec576108eb610856565b5b6108f582610845565b9050602081019050919050565b82818337600083830152505050565b600061092461091f846108d1565b6108b6565b9050828152602081018484840111156109405761093f610840565b5b61094b848285610902565b509392505050565b600082601f8301126109685761096761083b565b5b8135610978848260208601610911565b91505092915050565b600067ffffffffffffffff82111561099c5761099b610856565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6109c5816109b2565b81146109d057600080fd5b50565b6000813590506109e2816109bc565b92915050565b60006109fb6109f684610981565b6108b6565b90508083825260208201905060208402830185811115610a1e57610a1d6109ad565b5b835b81811015610a475780610a3388826109d3565b845260208401935050602081019050610a20565b5050509392505050565b600082601f830112610a6657610a6561083b565b5b8135610a768482602086016109e8565b91505092915050565b60008060008060808587031215610a9957610a98610831565b5b600085013567ffffffffffffffff811115610ab757610ab6610836565b5b610ac387828801610953565b945050602085013567ffffffffffffffff811115610ae457610ae3610836565b5b610af087828801610a51565b935050604085013567ffffffffffffffff811115610b1157610b10610836565b5b610b1d87828801610a51565b9250506060610b2e878288016109d3565b91505092959194509250565b60008115159050919050565b610b4f81610b3a565b82525050565b6000602082019050610b6a6000830184610b46565b92915050565b600067ffffffffffffffff821115610b8b57610b8a610856565b5b602082029050919050565b6000610ba9610ba484610b70565b6108b6565b90508060208402830185811115610bc357610bc26109ad565b5b835b81811015610bec5780610bd888826109d3565b845260208401935050602081019050610bc5565b5050509392505050565b600082601f830112610c0b57610c0a61083b565b5b6002610c18848285610b96565b91505092915050565b600080600080600060c08688031215610c3d57610c3c610831565b5b600086013567ffffffffffffffff811115610c5b57610c5a610836565b5b610c6788828901610953565b955050602086013567ffffffffffffffff811115610c8857610c87610836565b5b610c9488828901610953565b9450506040610ca5888289016109d3565b9350506060610cb6888289016109d3565b9250506080610cc788828901610bf6565b9150509295509295909350565b610cdd816109b2565b82525050565b6000602082019050610cf86000830184610cd4565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610d38826109b2565b9150610d43836109b2565b925082610d5357610d52610cfe565b5b828206905092915050565b600082825260208201905092915050565b7f52696e67206c656e677468206d757374206265206576656e20616e642067726560008201527f61746572207468616e2031000000000000000000000000000000000000000000602082015250565b6000610dcb602b83610d5e565b9150610dd682610d6f565b604082019050919050565b60006020820190508181036000830152610dfa81610dbe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e3b826109b2565b9150610e46836109b2565b925082610e5657610e55610cfe565b5b828204905092915050565b7f526573706f6e736573206c656e677468206d75737420626520657175616c207460008201527f6f2072696e67206c656e677468202f2032000000000000000000000000000000602082015250565b6000610ebd603183610d5e565b9150610ec882610e61565b604082019050919050565b60006020820190508181036000830152610eec81610eb0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610f2d826109b2565b9150610f38836109b2565b9250828201905080821115610f5057610f4f610e01565b5b92915050565b6000610f61826109b2565b9150610f6c836109b2565b9250828203905081811115610f8457610f83610e01565b5b92915050565b610f93816109b2565b82525050565b600060029050919050565b600081905092915050565b6000819050919050565b610fc2816109b2565b82525050565b6000610fd48383610fb9565b60208301905092915050565b6000602082019050919050565b610ff681610f99565b6110008184610fa4565b925061100b82610faf565b8060005b8381101561103c5781516110238782610fc8565b965061102e83610fe0565b92505060018101905061100f565b505050505050565b60006060820190506110596000830185610f8a565b6110666020830184610fed565b9392505050565b600067ffffffffffffffff82111561108857611087610856565b5b602082029050919050565b6000815190506110a2816109bc565b92915050565b60006110bb6110b68461106d565b6108b6565b905080602084028301858111156110d5576110d46109ad565b5b835b818110156110fe57806110ea8882611093565b8452602084019350506020810190506110d7565b5050509392505050565b600082601f83011261111d5761111c61083b565b5b600361112a8482856110a8565b91505092915050565b60006060828403121561114957611148610831565b5b600061115784828501611108565b91505092915050565b600060039050919050565b600081905092915050565b6000819050919050565b6000602082019050919050565b61119681611160565b6111a0818461116b565b92506111ab82611176565b8060005b838110156111dc5781516111c38782610fc8565b96506111ce83611180565b9250506001810190506111af565b505050505050565b600060c0820190506111f9600083018561118d565b611206606083018461118d565b9392505050565b600081519050919050565b600081905092915050565b60005b83811015611241578082015181840152602081019050611226565b60008484015250505050565b60006112588261120d565b6112628185611218565b9350611272818560208601611223565b80840191505092915050565b7f393935353531353932393735383636343633353537363833363938373035333060008201527f393930323436383338333835353635373538323335363332313230313739353560208201527f3337313339363135373638350000000000000000000000000000000000000000604082015250565b6000611300604c83611218565b915061130b8261127e565b604c82019050919050565b7f383338323335313139313735383331393334353036383831393131333038323360008201527f343331373833303731373330363838353834383231393934393934373835383560208201527f3033393032333739313935373100000000000000000000000000000000000000604082015250565b6000611398604d83611218565b91506113a382611316565b604d82019050919050565b60006113ba828561124d565b91506113c6828461124d565b91506113d1826112f3565b91506113dc8261138b565b91508190509392505050565b60006113f4828461124d565b915081905092915050565b6000819050919050565b61141a611415826109b2565b6113ff565b82525050565b600061142c828661124d565b91506114388285611409565b6020820191506114488284611409565b60208201915081905094935050505056fea2646970667358221220b8c18e24922646bc6a66da018af4e5db551afaacc0f65ae05863a823c1bbffb564736f6c63430008140033";

type RingSigVerifierConstructorParams =
  | [linkLibraryAddresses: RingSigVerifierLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RingSigVerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class RingSigVerifier__factory extends ContractFactory {
  constructor(...args: RingSigVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        RingSigVerifier__factory.linkBytecode(linkLibraryAddresses),
        signer,
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: RingSigVerifierLibraryAddresses,
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ac9df8564564f09022d97baa7c4ddef38f\\$__", "g"),
      linkLibraryAddresses["contracts/secp256k1.sol:Secp256k1"]
        .replace(/^0x/, "")
        .toLowerCase(),
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string },
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      RingSigVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RingSigVerifier__factory {
    return super.connect(runner) as RingSigVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RingSigVerifierInterface {
    return new Interface(_abi) as RingSigVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null,
  ): RingSigVerifier {
    return new Contract(address, _abi, runner) as unknown as RingSigVerifier;
  }
}

export interface RingSigVerifierLibraryAddresses {
  ["contracts/secp256k1.sol:Secp256k1"]: string;
}
