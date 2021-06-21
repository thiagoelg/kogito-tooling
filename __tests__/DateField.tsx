import React from 'react';
import { act } from 'react-dom/test-utils';
import { DateField } from 'uniforms-patternfly';
import createContext from './_createContext';
import mount from './_mount';

test('<DateField> - renders an input', () => {
  const element = <DateField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
});

test('<DateField> - renders a input with correct id (inherited)', () => {
  const element = <DateField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('DatePicker').prop('id')).toBeTruthy();
  expect(wrapper.find('TimePicker').prop('id')).toBeTruthy();
});

test('<DateField> - renders a input with correct id (specified)', () => {
  const element = <DateField name="x" id="y" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('Flex').prop('id')).toBe('y');
  expect(wrapper.find('DatePicker').prop('id')).toBe('date-picker-y');
  expect(wrapper.find('TimePicker').prop('id')).toBe('time-picker-y');
});

test('<DateField> - renders a input with correct name', () => {
  const element = <DateField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('Flex').prop('name')).toBe('x');
});

test('<DateField> - renders an input with correct disabled state', () => {
  const element = <DateField name="x" disabled />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('DatePicker').prop('isDisabled')).toBe(true);
  expect(wrapper.find('TimePicker').prop('isDisabled')).toBe(true);
});

test('<DateField> - renders a input with correct label (specified)', () => {
  const element = (
    <DateField required={false} name="x" label="DateFieldLabel" />
  );
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('label')).toHaveLength(1);
  expect(wrapper.find('label').text()).toBe('DateFieldLabel');
  expect(wrapper.find('label').prop('htmlFor')).toBe(
    wrapper.find('Flex').prop('id')
  );
});

test('<DateField> - renders a input with correct label (specified)', () => {
  const element = <DateField required={true} name="x" label="DateFieldLabel" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('label')).toHaveLength(1);
  expect(wrapper.find('label').text()).toBe('DateFieldLabel *');
  expect(wrapper.find('label').prop('htmlFor')).toBe(
    wrapper.find('Flex').prop('id')
  );
});

test('<DateField> - renders a input with correct value (default)', () => {
  const element = <DateField name="x" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('DatePicker').find('input').prop('value')).toBe('');
  expect(wrapper.find('TimePicker').find('input').prop('value')).toBe('');
});

test('<DateField> - renders a input with correct value (model)', () => {
  const now = new Date();
  const element = <DateField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Date } }, { model: { x: now } })
  );

  let isAm = true;
  let hours = now.getHours();
  if (hours > 12) {
    hours %= 12;
    isAm = false;
  }
  const minutes = now.getMinutes();
  const time = `${hours}:${minutes} ${isAm ? 'AM' : 'PM'}`;

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('TimePicker').prop('value')).toEqual(time);
});

test('<DateField> - renders a input with correct value (specified)', () => {
  const now = new Date();
  const element = <DateField name="x" value={now} />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('DatePicker').find('input').prop('value')).toEqual(
    now.toISOString().slice(0, -14)
  );
});

test('<DateField> - renders a input which correctly reacts on change (DatePicker)', () => {
  const onChange = jest.fn();

  const now = '2000-04-04';
  const element = <DateField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Date } }, { onChange })
  );

  act(() => {
    wrapper.find('DatePicker').find('input').prop('onChange')!({
      currentTarget: { value: now },
    } as any);
  });

  expect(onChange).toHaveBeenLastCalledWith('x', new Date(`${now}T00:00:00`));
});

test('<DateField> - renders a input which correctly reacts on change (DatePicker - empty)', () => {
  const onChange = jest.fn();

  const element = <DateField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Date } }, { onChange })
  );

  act(() => {
    wrapper.find('DatePicker').find('input').prop('onChange')!({
      currentTarget: { value: '' },
    } as any);
  });

  expect(onChange).toHaveBeenLastCalledWith('x', undefined);
});

test('<DateField> - renders a input which correctly reacts on change (TimePicker - invalid)', () => {
  const onChange = jest.fn();

  const now = '10:00 AM';
  const element = <DateField name="x" />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Date } }, { onChange })
  );

  act(() => {
    wrapper.find('TimePicker').find('input').prop('onChange')!({
      currentTarget: { value: now },
    } as any);
  });

  expect(onChange).not.toHaveBeenCalled();
});

test.skip('<DateField> - renders a input which correctly reacts on change (TimePicker - valid)', () => {
  const onChange = jest.fn();

  const date = '2000-04-04';
  const time = '10:30 AM';
  const element = <DateField name="x" value={new Date(`${date}T00:00:00`)} />;
  const wrapper = mount(
    element,
    createContext({ x: { type: Date } }, { onChange })
  );

  act(() => {
    wrapper.find('TimePicker').find('input').prop('onChange')!({
      currentTarget: { value: time },
    } as any);
  });

  expect(onChange).toHaveBeenLastCalledWith('x', new Date(`${date}T10:30:00`));
});

test('<DateField> - renders a wrapper with unknown props', () => {
  const element = <DateField name="x" data-x="x" data-y="y" data-z="z" />;
  const wrapper = mount(element, createContext({ x: { type: Date } }));

  expect(wrapper.find('div').at(0).prop('data-x')).toBe('x');
  expect(wrapper.find('div').at(0).prop('data-y')).toBe('y');
  expect(wrapper.find('div').at(0).prop('data-z')).toBe('z');
});
