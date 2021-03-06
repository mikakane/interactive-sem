'use strict';
import constants from '../../../../app/src/scripts/constants';
import powerAssert from 'power-assert';
import sinon from 'sinon';
const assert = powerAssert.customize({output: {maxDepth: 3}});

import Converter from '../../../../app/src/scripts/modules/csv-to-egrid-converter';

describe('CsvToEgridConverter', () => {
  describe('.convert()', () => {
    it('should be converted correctly', () => {
      const data = [
        {A: 123, B: 456, C: 789},
        {A:  12, B: 345, C: 678},
        {A: 901, B: 234, C: 567},
        {A: 890, B: 123, C: 456}
      ];
      const expected = {
        labels:    ['A', 'B', 'C'],
        dataArray: [[123, 12, 901, 890], [456, 345, 234, 123], [789, 678, 567, 456]]
      };
      var result = Converter.convert(data);
      assert.deepEqual(result, expected);
    });
  });

});