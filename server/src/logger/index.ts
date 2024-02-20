// @todo: implement external logging service here

const error = (message?: string, ...rest: any) => {
  console.error(message ?? "ERROR!", ...rest);
};

const warn = (message?: string, ...rest: any) => {
  console.warn(message ?? "Warning!", ...rest);
};

const info = (message?: string, ...rest: any) => {
  console.info(message ?? "Something's happening.", ...rest);
};

export default { error, info, warn };
