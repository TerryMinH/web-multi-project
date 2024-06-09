/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-03-24 09:21:40
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

const averageData2: Array<SeasonDataExtraItemType> = [
    
];

console.log(averageData1, averageData2);
