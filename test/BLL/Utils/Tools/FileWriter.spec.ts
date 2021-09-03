import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, it } from 'mocha';
import fs from 'fs';
import FileWriter from '../../../../src/BLL/Utils/Tools/FileWriter';

chai.use(chaiAsPromised);

describe('FileWriter Tests', () => {
  describe('Sync', () => {
    it('should write a file sync to disk', () => {
      const filePath = '/home/silas/code/TS_RestAPI/test/Logg/';
      const fileName = 'test.txt';
      const fileContent = 'test';
      FileWriter.WriteFileToDisk(filePath, fileName, fileContent);
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      expect(fs.existsSync(filePath)).to.be.true;
    });
  });
  // describe('Async', () => {
  //   it('should write a file Async to disk', () => {
  //     const filePath = './test/Logg';
  //     const fileName = 'Asynctest.txt';
  //     const fileContent = 'test';
  //     FileWriter.WriteFileToDiskAsync(filePath, fileName, fileContent);
  //   });
  // });
});
