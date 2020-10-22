import React, { useState, useEffect, useRef } from 'react';
import { useElements } from '../../../periodic-table/periodic-table-state/table-store';
import { TABLE_DICO_V2 } from '../../../periodic-table/periodic-table-data/table-v2';
import {
  getDelimiter,
  elementsArrayToElementState,
  formulaStringToArrays,
  getTruthyKeys,
  arrayToDelimitedString
} from '../../../search/utils';
import { Dropdown, Form, Button } from 'react-bulma-components';
import { MaterialsInputField, MaterialsInputBoxProps } from '../MaterialsInput';
const { Input, Field, Control } = Form;

/**
 * The text input component of a MaterialsInput component
 * Handles the two-way binding between input and periodic table
 */

export const MaterialsInputBox: React.FC<MaterialsInputBoxProps> = props => {
  const { enabledElements, lastAction, actions: ptActions } = useElements();
  const [delimiter, setDelimiter] = useState(',');
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownItems = [
    { label: 'By elements', value: MaterialsInputField.ELEMENTS },
    { label: 'By formula', value: MaterialsInputField.FORMULA },
    { label: 'By mp-id', value: MaterialsInputField.MP_ID }
  ];

  /**
   * Handle updating the context with the new raw input value
   * All side effects to this change are handled in an effect hook
   */
  const handleRawValueChange = event => {
    props.onChange(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  const handleFocus = () => {
    if (props.onFocus) props.onFocus();
  };

  const handleBlur = event => {
    if (props.onBlur) props.onBlur();
  };

  /**
   * Handle direct interactions with the periodic table
   * This hook is triggered any time enabledElements changes
   * To prevent an infinite update loop, the function is skipped
   * if enabledElements was changed from an external action, not a direct element click
   * (as determined by the presence of lastAction.type)
   */
  useEffect(() => {
    if (lastAction && lastAction.hasOwnProperty('type')) {
      const enabledElementsList = getTruthyKeys(enabledElements);
      let newValue = '';
      switch (props.field) {
        case MaterialsInputField.ELEMENTS:
          newValue = arrayToDelimitedString(enabledElementsList, delimiter);
          break;
        case MaterialsInputField.FORMULA:
          if (lastAction.type === 'select') {
            newValue = props.value + enabledElementsList[enabledElementsList.length - 1];
          } else {
            var { formulaSplitWithNumbers, formulaSplitElementsOnly } = formulaStringToArrays(
              props.value
            );
            const removedIndex = formulaSplitElementsOnly?.findIndex((d, i) => {
              return enabledElementsList.indexOf(d) === -1;
            });
            if (removedIndex !== undefined) formulaSplitWithNumbers?.splice(removedIndex, 1);
            if (formulaSplitWithNumbers)
              newValue = formulaSplitWithNumbers.toString().replace(/,/gi, '');
          }
          break;
        case MaterialsInputField.MP_ID:
          newValue = arrayToDelimitedString(enabledElementsList, delimiter);
          if (props.onFieldChange) props.onFieldChange(MaterialsInputField.ELEMENTS);
          break;
        default:
          return;
      }
      props.onParsedValueChange(newValue);
      props.onChange(newValue);
    }
  }, [enabledElements]);

  /**
   * Trigger side effects when raw input value changes
   * Detects when search type has changed based on presence of numbers (indicative of formula)
   * or delimiters (indicative of elements).
   * Adds/removes enabled elements from the periodic table.
   * Only adds/removes elements when input value and pt are not in sync (prevents infinite hooks)
   * Sends clean input value to onChange function passed in as a prop
   */
  useEffect(() => {
    const enabledElementsList = getTruthyKeys(enabledElements);
    const newValue = props.value;
    let newMaterialsInputField = props.field;
    let newDelimiter = delimiter;
    let newParsedValue: string | string[] | null = null;

    if (props.onFieldChange && newValue && newValue.indexOf('mp') === 0) {
      newMaterialsInputField = MaterialsInputField.MP_ID;
    } else if (props.onFieldChange && newValue && newValue.match(/[0-9]/g)) {
      newMaterialsInputField = MaterialsInputField.FORMULA;
    } else if (props.onFieldChange && newValue && newValue.match(/,|-/gi)) {
      newMaterialsInputField = MaterialsInputField.ELEMENTS;
    }

    switch (newMaterialsInputField) {
      case MaterialsInputField.MP_ID:
        ptActions.clear();
        break;
      case MaterialsInputField.ELEMENTS:
        newDelimiter = getDelimiter(newValue);
        const cleanedInput = newValue.replace(/and|\s|[0-9]/gi, '');
        const inputSplit = cleanedInput.split(newDelimiter);
        const newElements: string[] = [];
        inputSplit.forEach(el => {
          if (TABLE_DICO_V2[el]) {
            newElements.push(el);
            if (!enabledElements[el]) ptActions.addEnabledElement(el);
          }
        });
        enabledElementsList.forEach(el => {
          if (inputSplit.indexOf(el) === -1) ptActions.removeEnabledElement(el);
        });
        newParsedValue = newElements;
        break;
      case MaterialsInputField.FORMULA:
        var { formulaSplitWithNumbers, formulaSplitElementsOnly } = formulaStringToArrays(newValue);
        formulaSplitElementsOnly.forEach(el => {
          if (TABLE_DICO_V2[el]) {
            if (!enabledElements[el]) ptActions.addEnabledElement(el);
          }
        });
        enabledElementsList.forEach(el => {
          if (formulaSplitElementsOnly.indexOf(el) === -1) ptActions.removeEnabledElement(el);
        });
        break;
      default:
        throw 'invalid field in materials input';
    }

    newParsedValue = newParsedValue ? newParsedValue : newValue;
    setDelimiter(newDelimiter);
    if (props.onFieldChange) props.onFieldChange(newMaterialsInputField);
    props.onParsedValueChange(newParsedValue);
  }, [props.value]);

  useEffect(() => {
    if (props.liftInputRef) props.liftInputRef(inputRef);
  }, []);

  const inputControl = (
    <Control className="is-expanded">
      <input
        className="input"
        type="search"
        value={props.value}
        onChange={handleRawValueChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={props.onSubmit ? 'Search by elements, formula, or ID' : undefined}
        ref={inputRef}
      />
    </Control>
  );

  const inputField = () => {
    if (props.onSubmit) {
      return (
        <form onSubmit={handleSubmit}>
          <Field className="has-addons">
            {inputControl}
            <Control className="">
              <Button color="primary" type="submit">
                Search
              </Button>
            </Control>
          </Field>
        </form>
      );
    } else if (!props.onSubmit && props.onFieldChange) {
      return (
        <Field className="has-addons">
          <Control>
            <Dropdown
              value={props.field}
              onChange={(item: MaterialsInputField) => {
                if (props.onFieldChange) props.onFieldChange(item);
              }}
              color="primary"
            >
              {dropdownItems.map((item, k) => {
                return (
                  <Dropdown.Item key={k} value={item.value}>
                    {item.label}
                  </Dropdown.Item>
                );
              })}
            </Dropdown>
          </Control>
          {inputControl}
        </Field>
      );
    } else {
      return <Field>{inputControl}</Field>;
    }
  };

  return <>{inputField()}</>;
};