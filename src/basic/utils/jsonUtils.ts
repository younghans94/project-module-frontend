export const jsonUtils = {
  parse: (jsonString: string) => {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      alert(e);
    }
  },
};
