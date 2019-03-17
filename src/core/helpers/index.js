export const promisify = (data) => {
  const promise = new Promise(((resolve, reject) => {
    const success = 1;
    if (success) {
      resolve(data);
    } else {
      reject(Error('Ինչ-որ սխալ է տեղի ունեցել'));
    }
  }));

  return promise;
};
