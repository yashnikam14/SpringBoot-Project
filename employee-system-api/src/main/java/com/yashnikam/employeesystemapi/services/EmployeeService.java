package com.yashnikam.employeesystemapi.services;

import java.util.List;
import com.yashnikam.employeesystemapi.model.Employee;

public interface EmployeeService {
 
    Employee createEmp(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);


}
