import { useState, useEffect, useCallback } from 'react';
import { divisions, type Division, type Member } from '@/data/divisions';

export const useDivisionsData = () => {
  const [data, setData] = useState<Division[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    const STORAGE_KEY = 'himakala_divisions_data';
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (error) {
        console.error('Error loading divisions data:', error);
        setData(divisions);
      }
    } else {
      setData(divisions);
    }
    setIsLoading(false);
  }, []);

  // Save data to localStorage
  const saveData = useCallback((newData: Division[]) => {
    const STORAGE_KEY = 'himakala_divisions_data';
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }, []);

  // Add member to division
  const addMember = useCallback(
    (divisionId: string, member: Member) => {
      const newData = data.map((division) =>
        division.id === divisionId
          ? {
              ...division,
              members: [...division.members, { ...member, id: Date.now().toString() }],
            }
          : division
      );
      saveData(newData);
    },
    [data, saveData]
  );

  // Update member in division
  const updateMember = useCallback(
    (divisionId: string, memberId: string, member: Member) => {
      const newData = data.map((division) =>
        division.id === divisionId
          ? {
              ...division,
              members: division.members.map((m) =>
                m.id === memberId ? { ...m, ...member } : m
              ),
            }
          : division
      );
      saveData(newData);
    },
    [data, saveData]
  );

  // Delete member from division
  const deleteMember = useCallback(
    (divisionId: string, memberId: string) => {
      const newData = data.map((division) =>
        division.id === divisionId
          ? {
              ...division,
              members: division.members.filter((m) => m.id !== memberId),
            }
          : division
      );
      saveData(newData);
    },
    [data, saveData]
  );

  // Add division
  const addDivision = useCallback(
    (division: Omit<Division, 'id'>) => {
      const newDivision: Division = {
        ...division,
        id: Date.now().toString(),
      };
      const newData = [...data, newDivision];
      saveData(newData);
      return newDivision;
    },
    [data, saveData]
  );

  // Update division
  const updateDivision = useCallback(
    (divisionId: string, updates: Partial<Division>) => {
      const newData = data.map((division) =>
        division.id === divisionId ? { ...division, ...updates } : division
      );
      saveData(newData);
    },
    [data, saveData]
  );

  // Delete division
  const deleteDivision = useCallback((divisionId: string) => {
    const newData = data.filter((division) => division.id !== divisionId);
    saveData(newData);
  }, [data, saveData]);

  // Reset to default
  const resetToDefault = useCallback(() => {
    const STORAGE_KEY = 'himakala_divisions_data';
    setData(divisions);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    data,
    isLoading,
    addMember,
    updateMember,
    deleteMember,
    addDivision,
    updateDivision,
    deleteDivision,
    resetToDefault,
  };
};
