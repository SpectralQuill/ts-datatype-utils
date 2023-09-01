module CollectionUtils {

    

}

export default class CollectionUtils {

    // switchType: callbacks should be optional

    public static isEmpty<T>(collection: collection<T>): boolean {

        return this.switchType(
            collection,
            (array: T[]) => array.length == 0,
            (set: Set<T>) => set.size == 0
        )

    }

    public static switchType<T, R>(
        collection: collection<T>,
        array: (array: T[]) => R,
        set: (set: Set<T>) => R
    ): R {

        return collection instanceof Array ? array(collection) : set(collection);

    }

}
