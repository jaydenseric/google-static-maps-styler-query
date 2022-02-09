import TestDirector from 'test-director';

import testBundle from './bundle.test.mjs';
import testGoogleStaticMapsStyleQuery from './googleStaticMapsStyleQuery.test.mjs';

const tests = new TestDirector();

testGoogleStaticMapsStyleQuery(tests);
testBundle(tests);

tests.run();
