interface Events {
	dispatch: () => void;
	listen: () => void;
}

export const EventDispatcher = () => {
  let eventsList: Events = {};

  return () => {
    const listen = (eventName: string, callback: any) => {
      if (!eventsList[eventName]) {
        eventsList[eventName] = [];
      }

      eventsList[eventName].push(callback);
    };

    const dispatch = (eventName: string, dataObject: any) => {
      if (!eventsList[eventName] || eventsList[eventName].length < 1) {
        return;
      }

      eventsList[eventName].forEach((listener) => {
        listener(dataObject || {});
      });
    };

    return {
      dispatch: dispatch,
      listen: listen
    };
  };
};
