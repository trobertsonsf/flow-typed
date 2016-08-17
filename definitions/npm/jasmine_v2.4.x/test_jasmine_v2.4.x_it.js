/* @flow */

/**
 * it
 */

it('desc', () => {});

it('desc', (done) => { done(); });

// $ExpectError number. This type is incompatible with function type.
it('desc', 12);
// $ExpectError number. This type is incompatible with string.
it(12, () => {});
// $ExpectError function. This type is incompatible with number.
it('desc', (done) => { done++ });

/**
 * fit
 */

fit('desc', () => {});

fit('desc', (done) => { done(); });

// $ExpectError number. This type is incompatible with function type.
fit('desc', 12);
// $ExpectError number. This type is incompatible with string.
fit(12, () => {});
// $ExpectError function. This type is incompatible with number.
fit('desc', (done) => { done++ });

/**
 * xit
 */

xit('desc', () => {});

xit('desc', (done) => { done(); });

// $ExpectError number. This type is incompatible with function type.
xit('desc', 12);
// $ExpectError number. This type is incompatible with string.
xit(12, () => {});
// $ExpectError function. This type is incompatible with number.
xit('desc', (done) => { done++ });
