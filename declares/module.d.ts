declare module "OriginStorages" {
    /**
     * OriginStorageへのアクセスを提供するクラス
     * @class OriginStorage
     */
    export class OriginStorage {
        /**
         * 接続先のOriginStorageの名前
         */
        storageName: string;

        /**
         * ストレージ内n番目のキーの名称を返す
         */
        keys(n: number): Promise<string>;

        /**
         * ストレージに指定したキーと値を追加/更新
         */
        setItem(key: any, value: any): Promise<void>;

        /**
         * setItemのエイリアス
         */
        set(key: any, value: any): Promise<void>;

        /**
         * ストレージ内の指定したキーの値を取得
         */
        getItem(key: any): Promise<any>;

        /**
         * getItemのエイリアス
         */
        get(key: any): Promise<any>;

        /**
         * ストレージ内の指定したキーと値のペアを削除
         */
        removeItem(key: any): Promise<void>;

        /**
         * removeItemのエイリアス
         */
        delete(key: any): Promise<void>;

        /**
         * ストレージ内のすべてのキーと値のペアを削除
         */
        clear(): Promise<void>;

        /**
         * 指定したキーがストレージ内に存在するかどうかを確認
         */
        has(key: any): Promise<boolean>;

        /**
         * ストレージ内のすべての値を取得
         */
        values(): Promise<any[]>;

        /**
         * ストレージ内のキーと値のペアの数を取得
         */
        readonly length: Promise<number>;

        constructor(storageName: string);
    }

    export default OriginStorage;
}
