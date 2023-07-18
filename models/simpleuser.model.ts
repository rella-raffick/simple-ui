import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

interface SimpleUserInterface {
  firstName: string;
  lastName: string;
}

@Table({
  tableName: "SimpleUser",
  modelName: "SimpleUser",
})
export class SimpleUser extends Model<SimpleUserInterface> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id: number;

  constructor(values?: any, options?: any) {
    super(values, options);
    this.id = 0; // Initialize the id property in the constructor
  }

  @AllowNull(true)
  @Unique
  @Column(DataType.STRING)
  firstName?: string;

  @AllowNull(true)
  @Unique
  @Column(DataType.STRING)
  lastName?: string;
}
