import TestDirector from "test-director";

import testGoogleStaticMapsStyleQuery from "./googleStaticMapsStyleQuery.test.mjs";

const tests = new TestDirector();

testGoogleStaticMapsStyleQuery(tests);

tests.run();
