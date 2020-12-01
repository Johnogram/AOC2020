import React from 'react';

import Input from './input.json';
import styles from './ReportRepair.module.css';

interface Results {
  entryOne: number;
  entryTwo: number;
  answer: number;
}

function getResults(): Results {
  let entryOne: number = 0;
  let entryTwo: number = 0;
  let answer: number = 0;

  for (const loopOneValue of Input.entries) {
    for (const loopTwoValue of Input.entries) {
      if (
        loopOneValue === loopTwoValue
        || loopOneValue + loopTwoValue !== 2020
      ) {
        continue;
      }

      entryOne = loopOneValue;
      entryTwo = loopTwoValue;
      answer = loopOneValue * loopTwoValue;
    }
  }

  return {
    entryOne,
    entryTwo,
    answer
  };
}

function renderEntries(): JSX.Element {
  return (
    <div className={styles.entries}>
      {Input.entries.map(entry => (
        <div className={styles.entry} key={entry}>{entry}</div>
      ))}
    </div>
  );
}

function renderResults(): JSX.Element {
  const { entryOne, entryTwo, answer } = getResults();

  return (
    <div className={styles.results}>
      <h3>Results</h3>
      <ul>
        <li>
          Entry 1
          <span>{entryOne}</span>
        </li>
        <li>
          Entry 2
          <span>{entryTwo}</span>
        </li>
        <li>
          Answer
          <span>{answer}</span>
        </li>
      </ul>
    </div>
  );
}

export function ReportRepair(): JSX.Element {
  return (
    <>
      <h1>Report Repair</h1>
      {renderEntries()}
      {renderResults()}
    </>
  );
}
