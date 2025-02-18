/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-15 14:43:11
 * @Description: file not
 */
type stringKey = Record<string, boolean>;
const accessDict: stringKey = {
  create: false, // 创建
  receive: false, // 接收
};

export type SeasonDataExtraItemType = {
  isActiveB: string;
};

export type AveragingTeamType = {
  seasonList: Array<SeasonDataExtraItemType>;
  moduleName?: string;
};

const averageData1: Pick<AveragingTeamType, "seasonList"> = {
  seasonList: [],
};

const averageData2: Array<SeasonDataExtraItemType> = [];

console.log(averageData1, averageData2);