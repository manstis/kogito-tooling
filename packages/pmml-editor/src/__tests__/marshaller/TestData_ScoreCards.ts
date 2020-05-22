/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const SCORE_CARD_1: string = `
  <PMML xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="4.2" xsi:schemaLocation="http://www.dmg.org/PMML-4_2 http://www.dmg.org/v4-2-1/pmml-4-2.xsd" xmlns="http://www.dmg.org/PMML-4_2">
    <Header/>
    <DataDictionary>
      <DataField name="input1" optype="continuous" dataType="double"/>
      <DataField name="input2" optype="continuous" dataType="double"/>
      <DataField name="score" optype="continuous" dataType="double"/>
    </DataDictionary>
    <Scorecard modelName="SimpleScorecard" functionName="regression" useReasonCodes="true" reasonCodeAlgorithm="pointsBelow" initialScore="5" baselineMethod="other">
      <MiningSchema>
        <MiningField name="input1" usageType="active" invalidValueTreatment="asMissing"/>
        <MiningField name="input2" usageType="active" invalidValueTreatment="asMissing"/>
        <MiningField name="score" usageType="target"/>
      </MiningSchema>
      <Output>
        <OutputField name="Score" feature="predictedValue" dataType="double" optype="continuous"/>
        <OutputField name="Reason Code 1" rank="1" feature="reasonCode" dataType="string" optype="categorical"/>
        <OutputField name="Reason Code 2" rank="2" feature="reasonCode" dataType="string" optype="categorical"/>
      </Output>
      <Characteristics>
        <Characteristic name="input1Score" baselineScore="4" reasonCode="Input1ReasonCode">
          <Attribute partialScore="-12">
            <SimplePredicate field="input1" operator="lessOrEqual" value="10"/>
          </Attribute>
          <Attribute partialScore="50">
            <SimplePredicate field="input1" operator="greaterThan" value="10"/>
          </Attribute>
        </Characteristic>
        <Characteristic name="input2Score" baselineScore="8" reasonCode="Input2ReasonCode">
          <Attribute partialScore="-8">
            <SimplePredicate field="input2" operator="lessOrEqual" value="-5"/>
          </Attribute>
          <Attribute partialScore="32">
            <SimplePredicate field="input2" operator="greaterThan" value="-5"/>
          </Attribute>
        </Characteristic>
      </Characteristics>
    </Scorecard>
  </PMML>
`;
