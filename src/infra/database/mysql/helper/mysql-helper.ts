import { Repository } from "typeorm";
import { AppDataSource } from "../../../../main/config/typeorm.config";

export const MysqlHelper = {
  async connect() {
    await AppDataSource.initialize();
  },

  async disconnect() {
    if (AppDataSource && AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  },

  async getRepository<T>(entity: new () => T): Promise<Repository<T>> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    return AppDataSource.getRepository(entity);
  },

  async deleteEntityByField(
    repositoryName: string,
    fieldName: string,
    fieldValue: string
  ): Promise<void> {
    const repository = AppDataSource.getRepository(repositoryName);
    const entity = await repository.findOne({
      where: { [fieldName]: fieldValue },
    });

    await repository.remove(entity);
  },
};
