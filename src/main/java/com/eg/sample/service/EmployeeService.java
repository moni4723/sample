package com.eg.sample.service;

import com.eg.sample.entity.Employee;
import com.eg.sample.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Method to get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee saveEmployee(Employee employee) {
        Employee savedEmployee = employeeRepository.save(employee);
        System.out.println("Saved Employee: " + savedEmployee);
        return savedEmployee;
    }


    // Method to get an employee by ID
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    // Method to delete an employee by ID
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
