/**
 * A simple storage solution that can be used for internal values that need to be stored.
 * In general storages taking objects as keys are expected to work with different instances
 * of an object with the same values. Exceptions to this expectation should be clearly documented.
 */
export interface KeyValueStorage<TKey, TValue> {
  /**
   * Returns the value stored for the given identifier.
   * `undefined` if no value is stored.
   * @param identifier - Identifier to get the value for.
   */
  get: (key: TKey) => Promise<TValue | undefined>;

  /**
   * Checks if there is a value stored for the given key.
   * @param identifier - Identifier to check.
   */
  has: (key: TKey) => Promise<boolean>;

  /**
   * Sets the value for the given key.
   * @param key - Key to set/update.
   * @param value - Value to store.
   *
   * @returns The storage.
   */
  set: (key: TKey, value: TValue) => Promise<this>;

  /**
   * Deletes the value stored for the given key.
   * @param key - Key to delete.
   *
   * @returns If there was a value to delete.
   */
  delete: (key: TKey) => Promise<boolean>;
}
