import { EncryptStorage } from "storage-encryption";

interface IStorage {
  encrypt(key: string, value: any): void;
  decrypt(key: string): any;
  remove(key: string): void;
}

export enum AppKey {
  USER = "USER",
}

export default class Store {
  private readonly storage: IStorage;
  private SECRET_KEY = "</intruder005";
  public constructor(
    getStorage = (): IStorage =>
      new EncryptStorage(this.SECRET_KEY, "sessionStorage")
  ) {
    this.storage = getStorage();
  }

  public get(key: string): any | null {
    const data = this.storage.decrypt(key);
    return data;
  }

  public set(key: string, value: any): void {
    this.storage.encrypt(key, value);
  }

  public clearItem(key: string): void {
    this.storage.remove(key);
  }
  public clearAll(except: string[] = []): void {
    Object.keys(AppKey).forEach(k => {
      if (except.length > 0 && !except.find(f => f == k)) {
        this.clearItem(k);
      }

    });
  }

  public clearItems(keys: string[]): void {
    keys.forEach((key) => this.clearItem(key));
  }
}
