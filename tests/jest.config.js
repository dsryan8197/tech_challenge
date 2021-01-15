configure({ adapter: new Adapter() });

describe('Test Setup', () => {
  it('should run before all tests', () => {
    expect(true).toBe(true);
  })
})