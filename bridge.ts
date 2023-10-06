type AllMethod = "openJsb" | "getAppInfo" | "x.open";

type IJsbPrams = {
  openJsb: {
    params: {
      fallback_url: string;
    };
    res: {
      url: string;
    };
  };
  getAppInfo: {
    params: {};
    res: {
      appIndo: string;
      cid: number;
    };
  };
};

type IRest = {
  [k: string]: any;
};

type IKIJsbParams = keyof IJsbPrams;

type IKIJsbParams2 = keyof IJsbPrams;

export type IJSBReqData1<method extends AllMethod> = method extends IKIJsbParams
  ? method extends IKIJsbParams2
    ? any
    : any
  : IRest;

export type IJSBReqData<method extends AllMethod> = method extends IKIJsbParams
  ? IJsbPrams[method]["params"] & IRest
  : IRest;

// export type IJSBResponse<>

function callJsb<T extends AllMethod>(jsbName: T, data: IJSBReqData<T>): any {
  // const method = IJsbPrams[jsbName];
  // const result = method.res ?? {};
  // result.url = data.params.fallback_url ?? "";
  // return result;
}

async function say111(params: string) {
  const { data } = await callJsb("getAppInfo", { a: 123 });

  const { data: data1 } = await callJsb("openJsb", { fallback_url: "s1231" });
}

// console.log(data.);

interface a {}

interface b {}

interface c {}
